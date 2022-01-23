import { useEffect, useRef, useState } from "react";

function Canvas(props) {
  const { canvasRef, ctxRef } = props;
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const colorPicker = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
    canvas.height = window.innerHeight - 40;
    canvas.width = window.innerWidth - 16;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [lineOpacity, lineWidth]);

  function getTouchPos(touchEvent) {
    var rect = canvasRef.current.getBoundingClientRect();
    return [
      touchEvent.touches[0].clientX - rect.left,
      touchEvent.touches[0].clientY - rect.top,
    ];
  }

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.strokeStyle = lineColor;
    const touch = e?.touches?.[0];
    if (touch) {
      ctxRef.current.moveTo(...getTouchPos(e));
    } else {
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    const touch = e?.touches?.[0];
    if (touch) {
      ctxRef.current.lineTo(...getTouchPos(e));
    } else {
      ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }

    ctxRef.current.stroke();
  };

  return (
    <>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
        ref={canvasRef}
        onClick={() => (colorPicker.current.style.zIndex = -1)}
      />
      <div className="colorselector">
        <input
          onChange={(e) => {
            setLineColor(e.target.value);
            colorPicker.current.style.zIndex = -1;
          }}
          type="color"
          value={lineColor}
          ref={colorPicker}
        />
        <img
          height="40px"
          width="40px"
          src="/images/colorpellete.png"
          alt="select color"
          onClick={() => {
            colorPicker.current.style.zIndex = 1;
            colorPicker.current.click();
          }}
        />
      </div>
    </>
  );
}

export default Canvas;

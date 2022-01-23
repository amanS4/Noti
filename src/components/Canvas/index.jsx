import { useEffect, useRef, useState } from "react";

function Canvas(props) {
  const { canvasRef, ctxRef } = props;
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  // Initialization when the component
  // mounts for the first time
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
  }, [lineColor, lineOpacity, lineWidth]);

  function getTouchPos(touchEvent) {
    var rect = canvasRef.current.getBoundingClientRect();
    return [
      touchEvent.touches[0].clientX - rect.left,
      touchEvent.touches[0].clientY - rect.top,
    ];
  }

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    const touch = e?.touches?.[0];
    if (touch) {
      ctxRef.current.moveTo(...getTouchPos(e));
    } else {
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }
    setIsDrawing(true);
  };

  // Function for ending the drawing
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
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      onTouchStart={startDrawing}
      onTouchEnd={endDrawing}
      onTouchMove={draw}
      ref={canvasRef}
    />
  );
}

export default Canvas;

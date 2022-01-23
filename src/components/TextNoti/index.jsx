import { Input, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

export default function TextNoti() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  function startDictation() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function (e) {
        console.log(e.results[0][0].transcript);
        setNoteBody((val) => val + ", " + e.results[0][0].transcript);
        recognition.stop();
      };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }
  return (
    <Stack
      display={"flex"}
      spacing={3}
      alignItems={"center"}
      paddingTop={{ sm: "18px", md: "24px" }}
    >
      <Input
        variant="filled"
        placeholder="Title"
        onChange={(e) => setNoteTitle(e.target.value)}
        width={"70%"}
      />
      <Textarea
        minHeight={"70vh"}
        variant="filled"
        placeholder="Notes"
        width={"90%"}
        value={noteBody}
        onChange={(e) => setNoteBody(e.target.value)}
      />
      <div onClick={startDictation}>voice</div>
    </Stack>
  );
}

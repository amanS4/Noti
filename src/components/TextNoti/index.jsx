import { Input, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

export default function TextNoti() {
  const [noteTitle, setNoteTitle] = useState("");
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
      />
    </Stack>
  );
}

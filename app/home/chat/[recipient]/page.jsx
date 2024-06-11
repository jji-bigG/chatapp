import React from "react";
import SendMessage from "./send_message";
import TextMessage from "./text_message";

export default function ChatRecipientPage({ params }) {
  return (
    <div>
      <h1>Chat with {params.recipient}</h1>
      <TextMessage />
      <SendMessage />
    </div>
  );
}

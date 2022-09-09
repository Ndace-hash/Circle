import { defineStore } from "pinia";
import { Message } from "../composables/interface";

export const useMessages = defineStore("messages", {
  state: () => ({
    messages: [
      {
        id: 1,
        sender_id: "zach",
        receiver_id: "akpa",
        time: "",
        content: "Hello",
      },
      {
        id: 2,
        sender_id: "akpa",
        receiver_id: "zach",
        time: "",
        content: "Hello",
      },
    ] as Message[],
  }),
  actions: {
    sendMessages(message: Message) {
      this.messages.push(message);
    },
  },
});

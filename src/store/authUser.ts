import { defineStore } from "pinia";

export const useAuthUser = defineStore("user", {
  state: () => ({
    currentUser: "zach",
  }),
});

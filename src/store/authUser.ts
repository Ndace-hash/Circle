import { defineStore } from "pinia";
import { User } from "@supabase/supabase-js";

interface Login {
  email: string;
  password: string;
}

export const useAuthUser = defineStore("user", {
  state: () => ({
    currentUser: null as User | null,
    conversations: [],
    loginDetails: {
      email: "",
      password: "",
    } as Login,
  }),
});

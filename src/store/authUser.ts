import { defineStore } from "pinia";
import { User } from "@supabase/supabase-js";

export const useAuthUser = defineStore("user", {
  state: () => ({
    currentUser: null as User | null,
    conversations: [],
  }),
});

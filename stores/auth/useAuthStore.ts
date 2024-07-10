import { create } from "zustand";
import { AuthState } from "./authTypes";
import { authActions } from "./authActions";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  message: null,
  ...authActions(set),
}));

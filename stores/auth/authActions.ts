import { SetState } from "zustand";
import { AuthState } from "./authTypes";
import * as authAPI from "./authAPI";

export const authActions = (set: SetState<AuthState>) => ({
  login: async (email: string, password: string) => {
    set({ isLoading: true, isError: false, message: null });
    try {
      const user = await authAPI.login(email, password);
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
        message: "Login successful",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        message: error.message,
      });
    }
  },
  register: async (email: string, password: string) => {
    set({ isLoading: true, isError: false, message: null });
    try {
      const user = await authAPI.register(email, password);
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
        message: "Registration successful",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        message: error.message,
      });
    }
  },
  logout: async () => {
    set({ isLoading: true, isError: false, message: null });
    try {
      await authAPI.logout();
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isError: false,
        message: "Logout successful",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        message: error.message,
      });
    }
  },
  getProfile: async () => {
    set({ isLoading: true, isError: false, message: null });
    try {
      const user = await authAPI.getProfile();
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
        message: "Profile fetched successfully",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        message: error.message,
      });
    }
  },
});

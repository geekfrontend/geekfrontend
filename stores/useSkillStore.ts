import { create } from "zustand";
import axios from "axios";
import { config } from "@/config";

const API_URL = `${config.API_URL}/skills`;

interface Skill {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface SkillState {
  skills: Skill[] | null;
  skill: Skill | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | null;
  fetchSkills: () => Promise<void>;
  fetchSkill: (id: number) => Promise<void>;
  createSkill: (name: string) => Promise<void>;
  updateSkill: (id: number, name: string) => Promise<void>;
  deleteSkill: (id: number) => Promise<void>;
}

export const useSkillStore = create<SkillState>((set) => ({
  skills: null,
  skill: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  fetchSkills: async () => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response.data);
      const { statusCode, status, message, data } = response.data;
      const { skills, page, limit, totalSkills, totalPages } = data;
      console.log(skills);
      set({
        skills: skills,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Skills fetched successfully" ?? message,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: error.message,
      });
    }
  },
  fetchSkill: async (id: number) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      set({
        skill: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Skill fetched successfully",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: error.message,
      });
    }
  },
  createSkill: async (name: string) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.post(`${API_URL}`, { name });
      set({
        skill: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Skill created successfully",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: error.message,
      });
    }
  },
  updateSkill: async (id: number, name: string) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.patch(`${API_URL}/${id}`, { name });
      set({
        skill: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Skill updated successfully",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: error.message,
      });
    }
  },
  deleteSkill: async (id: number) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      set({
        skill: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Skill deleted successfully",
      });
    } catch (error: any) {
      set({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: error.message,
      });
    }
  },
}));

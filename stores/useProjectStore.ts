import { create } from "zustand";
import axios from "axios";
import { config } from "@/config";
import ImageProject from "@/public/project.jpg";

const API_URL = `${config.API_URL}/projects`;

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ProjectState {
  projects: Project[] | null;
  project: Project | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  image: string | null;
  message: string | null;
  fetchProjects: () => Promise<void>;
  fetchProject: (id: number) => Promise<void>;
  createProject: (
    title: string,
    description: string,
    tags: string[]
  ) => Promise<void>;
  updateProject: (
    id: number,
    title: string,
    description: string,
    tags: string[]
  ) => Promise<void>;
  deleteProject: (id: number) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: null,
  project: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  image: null,
  fetchProjects: async () => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.get(`${API_URL}`);
      set({
        projects: [...response.data],
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Projects fetched successfully",
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
  fetchProject: async (id: number) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      set({
        project: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Project fetched successfully",
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
  createProject: async (title: string, description: string, tags: string[]) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.post(`${API_URL}`, {
        title,
        description,
        tags,
      });
      set({
        project: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Project created successfully",
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
  updateProject: async (
    id: number,
    title: string,
    description: string,
    tags: string[]
  ) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        title,
        description,
        tags,
      });
      set({
        project: response.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Project updated successfully",
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
  deleteProject: async (id: number) => {
    set({ isLoading: true, isError: false, isSuccess: false, message: null });
    try {
      await axios.delete(`${API_URL}/${id}`);
      set({
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "Project deleted successfully",
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

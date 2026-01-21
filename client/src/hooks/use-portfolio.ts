import { profile, experiences, projects, skills } from "@/data/portfolio";

export function useProfile() {
  return { data: profile, isLoading: false, error: null };
}

export function useExperiences() {
  return { data: experiences, isLoading: false, error: null };
}

export function useProjects() {
  return { data: projects, isLoading: false, error: null };
}

export function useSkills() {
  return { data: skills, isLoading: false, error: null };
}

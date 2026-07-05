const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
};
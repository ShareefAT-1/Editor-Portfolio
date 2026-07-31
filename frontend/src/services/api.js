const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
};

export const getProjectById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    const error = new Error("Failed to fetch project");
    error.status = response.status;
    throw error;
  }

  return response.json();
};

import Project from "../models/Project.js";

// GET /api/projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/projects/:id
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/projects
export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /api/projects/:id
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
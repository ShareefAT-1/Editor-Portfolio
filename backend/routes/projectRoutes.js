import express from "express";
import {
    getProjects,
    getProjectById,
    createProject,
    deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.delete("/:id", deleteProject);

export default router;
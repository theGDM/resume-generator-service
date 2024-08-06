import express from 'express';
import { createResume, deleteResume, getAllResumes, getAllResumesForUser, getResume, updateResume } from '../controllers/resumeController.js';

const router = express.Router();

//Get All the resumes for user
router.get("/:userId/resume", getAllResumesForUser);

//CREATE
router.post("/:userId", createResume);

//UPDATE
router.put("/:resumeId", updateResume);

//DELETE
router.delete("/:resumeId", deleteResume);

//GET
router.get("/:resumeId", getResume);

//GET ALL
router.get("/", getAllResumes);

export default router;
import Resume from "../models/Resume.js";

export const getAllResumesForUser = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const resumes = await Resume.find({ userId: userId });
        res.status(200).json(resumes);
    } catch (err) {
        next(err);
    }
}

export const createResume = async (req, res, next) => {
    const { userId } = req.params;

    const newResume = await Task({
        userId: userId,
        ...req.body,
    });

    try {
        const savedResume = await newResume.save();
        res.status(200).json(savedResume);
    } catch (err) {
        next(err);
    }
}

export const updateResume = async (req, res, next) => {
    let { resumeId } = req.params; //resume id
    try {
        const updatedTask = await Resume.findByIdAndUpdate(
            resumeId,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        next(err);
    }
}

export const deleteResume = async (req, res, next) => {
    const { resumeId } = req.params;
    try {
        await Resume.findByIdAndDelete(resumeId);
        res.status(200).json("Resume has been deleted");
    } catch (err) {
        next(err);
    }
}

export const getResume = async (req, res, next) => {
    let { resumeId } = req.params; //resume id
    try {
        const booking = await Resume.findById(resumeId);
        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
}

export const getAllResumes = async (req, res, next) => {
    try {
        const resumes = await Resume.find({});
        res.status(200).json(resumes);
    } catch (err) {
        next(err);
    }
}
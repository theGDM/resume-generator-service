import mongoose, { Schema } from 'mongoose';

// Define the Education schema
const educationSchema = new Schema({
    course: { type: String, required: true },
    subject: { type: String, required: true },
    institute: { type: String, required: true },
    duration: { type: String, required: true },
});

// Define the Experience schema
const experienceSchema = new Schema({
    role: { type: String, required: true },
    duration: { type: String, required: true },
    company: { type: String, required: true },
    acheivements: { type: String, required: true },
});

// Define the Certification schema
const certificationSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
});

// Define the Skill schema
const skillSchema = new Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
});

// Define the main Resume schema
const ResumeSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        required: true,
    },
    name: { type: String, required: true },
    shortDesc: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    github: { type: String },
    leetcode: { type: String },
    other: { type: String },
    portfolio: { type: String },
    education: [educationSchema], // Array of education sub-documents
    experience: [experienceSchema], // Array of experience sub-documents
    certifications: [certificationSchema], // Array of certification sub-documents
    skills: [skillSchema], // Array of skill sub-documents
}, { timestamps: true });

export default mongoose.model("Resume", ResumeSchema);
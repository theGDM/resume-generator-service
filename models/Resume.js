import mongoose, { Schema } from 'mongoose';

const ResumeSchema = new mongoose.Schema({
    userId: {
        type: Schema.ObjectId,
        required: true,
    },
}, { timestamps: true }); //it gonna give created and updated at times

export default mongoose.model("Resume", ResumeSchema);
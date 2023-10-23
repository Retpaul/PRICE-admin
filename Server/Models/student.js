import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  studentName: String,
  discipler: String,
  backgroundCourse: String,
  PRICEstream: String,
  matricNo:String,
});

const student = mongoose.model("student", studentSchema);

export default student;

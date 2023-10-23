import student from "../Models/student.js";

export async function getStudents(req, res) {
  try {
    const students = await student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export async function createStudent(req, res) {
  const studentInfo = req.body;
  const newStudent = new student(studentInfo);
  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export async function deleteStudent(req, res) {
  const id = req.params.id;
  try {
    await student.findByIdAndRemove(id).exec();
    res.send("Succesfully Deleted !!!");
  } catch (error) {
    console.log({ message: error.message });
  }
}

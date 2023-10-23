import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

export default function Showstudents() {
  const [studentList, SetStudentList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allStudents) => {
      SetStudentList(allStudents.data);
    });
  });

  function deleteHandler(id) {
    axios.delete(`http://localhost:5000/students/${id}`).then(() => {
      window.location.reload(false);
    });
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Matric No.</TableCell>
            <TableCell align="right">Course of Study</TableCell>
            <TableCell align="right">Stream</TableCell>
            <TableCell align="right">Discipler</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.matricNo}</TableCell>
              <TableCell align="right">{student.backgroundCourse}</TableCell>
              <TableCell align="right">{student.PRICEstream}</TableCell>
              <TableCell align="right">{student.discipler}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteHandler(student._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

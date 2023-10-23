import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import useStyles from "../styles.js";
import axios from "axios";

export default function CreateStudent() {
  const classes = useStyles();
  const [students, setStudents] = useState({
    studentName: "",
    discipler: "",
    backgroundCourse: "",
    PRICEstream: "",
    matricNo: "",
  });

  function addStudentHandler() {
    axios.post("http://localhost:5000/students", students).then(() => {
      window.location.reload(false);
    });
    setStudents({
      studentName: "",
      discipler: "",
      backgroundCourse: "",
      PRICEstream: "",
      matricNo: "",
    });
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "24ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={addStudentHandler}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={students.studentName}
        onChange={(event) => {
          setStudents({ ...students, studentName: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Matric No."
        variant="outlined"
        value={students.matricNo}
        onChange={(event) => {
          setStudents({ ...students, matricNo: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Course Of Study"
        variant="outlined"
        value={students.backgroundCourse}
        onChange={(event) => {
          setStudents({ ...students, backgroundCourse: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Discipler"
        variant="outlined"
        value={students.discipler}
        onChange={(event) => {
          setStudents({ ...students, discipler: event.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Stream"
        variant="outlined"
        value={students.PRICEstream}
        onChange={(event) => {
          setStudents({ ...students, PRICEstream: event.target.value });
        }}
      />
      

      <Button variant="outlined" type="submit">
        Add Student
      </Button>
    </Box>
  );
}

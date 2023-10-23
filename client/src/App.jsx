import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import useStyles from "./styles.js";
import ShowStudents from "./components/StudentList.jsx";
import CreateStudent from "./components/CreateStudent.jsx";

function App() {
  const classes = useStyles();
  return (
    <div >
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Students List
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
              
              <Grid item xs={10} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <ShowStudents />
                </AppBar>
              </Grid>

              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                  
                >
                  <CreateStudent />
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;

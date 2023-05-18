/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  image: {
    width: "100px",
    height: "100px",
  },
}));

// Take in props data to construct the component
const CampusView = (props) => {
  const classes = useStyles();
  const { campus, deleteCampus, deleteStudent } = props;
  if (!campus.students.length) {
    return (
      <div>
        <div>
          <h1>{campus.name}</h1>
        </div>
        <img src={campus.imageUrl} alt="Campus" className={classes.image} />
        <h3>{campus.description}</h3>
        <p>{campus.address}</p>
        <p>There are no students at this campus.</p>
        <br />
        <Link to={`/editcampus/` + campus.id}>
          <button>Edit Campus</button>
        </Link>
        <br />
        <Link to={`/newstudent/`}>
          <button>Add Student</button>
        </Link>
        <br />
        <Link to={`/campuses`}>
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        </Link>
        <br />
      </div>
    );
  }
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus" className={classes.image} />
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <br />
            <Link to={`/students`}>
              <button onClick={() => deleteStudent(student.id)}>
                Delete Student
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CampusView;

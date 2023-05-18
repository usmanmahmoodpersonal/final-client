/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */


import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles( () => ({
  image:{  
    width: '300px',
    height: '300px'
  },
 
}));



function CampusName(props) {
	const campusName = props.campusName
	const student = props.student
	if(campusName != null) {
		return <h3>{student.campus.name}</h3>;
	}
	return <h3>{"Not enrolled in a campus"}</h3>;
}

const StudentView = (props) => {
  const classes = useStyles();
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <CampusName campusName={student.campusId} student={student} />
      <img src={student.imageUrl} alt="Student Profile" className={classes.image}/>
      <br></br>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
      {student.campus != null &&
      <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link>
      }
      {student.campus === null &&
      <p>Student is not Enrolled in a Campus</p>
      }

      <br/>
      <br/>
      <Link to={`/editstudent/` + student.id}>
      <button>Edit Student</button>
      </Link>
      <br/>
      <Link to={`/students`}>
      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </Link>
    </div>
  );

};
//<h3>{student.campus.name}</h3>
export default StudentView;
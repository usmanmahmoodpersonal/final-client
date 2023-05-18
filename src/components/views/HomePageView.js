/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import management from '../assets/management.png';
import campus1 from '../assets/campus1.png';
import campus2 from '../assets/campus2.png';
import student1 from '../assets/student1.png';
import student2 from '../assets/student2.png';

// Define a style object for the container div
const HomePageView = () => {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bigPictureStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
  };

  const imageStyle = {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid white',
  };

  const campus1Style = {
    ...imageStyle,
    top: '20%',
    left: '10%',
  };

  const campus2Style = {
    ...imageStyle,
    top: '70%',
    left: '10%',
  };

  const student1Style = {
    ...imageStyle,
    top: '15%',
    right: '10%',
  };

  const student2Style = {
    ...imageStyle,
    top: '70%',
    right: '10%',
  };

  return (
    <div style={containerStyle}>
      <h1>Campus Management System</h1>
      <img src={management} style={bigPictureStyle} alt="Management System" />
      <img src={campus1} style={campus1Style} alt="Campus 1" />
      <img src={campus2} style={campus2Style} alt="Campus 2" />
      <img src={student1} style={student1Style} alt="Student 1" />
      <img src={student2} style={student2Style} alt="Student 2" />
    </div>
  );
};

export default HomePageView;
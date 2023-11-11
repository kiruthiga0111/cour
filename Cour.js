// // // // // import React, { useState } from 'react';
// // // // // import { Container, Form } from 'react-bootstrap';

// // // // // const CourseSelection = () => {
// // // // //   // Define your courses with their respective amounts
// // // // //   const courses = [
// // // // //     { id: 1, name: 'Course A', amount: 50 },
// // // // //     { id: 2, name: 'Course B', amount: 75 },
// // // // //     { id: 3, name: 'Course C', amount: 100 },
// // // // //   ];

// // // // //   // State to track selected courses
// // // // //   const [selectedCourses, setSelectedCourses] = useState([]);
  
// // // // //   // Calculate total amount based on selected courses
// // // // //   const calculateTotalAmount = () => {
// // // // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // // // //   };

// // // // //   // Handle checkbox changes
// // // // //   const handleCheckboxChange = (course) => {
// // // // //     const isSelected = selectedCourses.some((selectedCourse) => selectedCourse.id === course.id);

// // // // //     if (isSelected) {
// // // // //       setSelectedCourses((prevSelected) => prevSelected.filter((selectedCourse) => selectedCourse.id !== course.id));
// // // // //     } else {
// // // // //       setSelectedCourses((prevSelected) => [...prevSelected, course]);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Container>
// // // // //       <h2>Select Courses</h2>
// // // // //       <Form>
// // // // //         {courses.map((course) => (
// // // // //           <Form.Check
// // // // //             key={course.id}
// // // // //             type="checkbox"
// // // // //             label={`${course.name} - $${course.amount}`}
// // // // //             checked={selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)}
// // // // //             onChange={() => handleCheckboxChange(course)}
// // // // //           />
// // // // //         ))}
// // // // //       </Form>
// // // // //       <div>
// // // // //         <strong>Total Amount: ${calculateTotalAmount()}</strong>
// // // // //       </div>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default CourseSelection;


// // // // // import React, { useState } from 'react';
// // // // // import { Container, Form } from 'react-bootstrap';

// // // // // const CourseSelectionDropdown = () => {
// // // // //   const courses = [
// // // // //     { id: 1, name: 'Course A', amount: 50 },
// // // // //     { id: 2, name: 'Course B', amount: 75 },
// // // // //     { id: 3, name: 'Course C', amount: 100 },
// // // // //   ];

// // // // //   const [selectedCourses, setSelectedCourses] = useState([]);

// // // // //   const calculateTotalAmount = () => {
// // // // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // // // //   };

// // // // //   const handleDropdownChange = (e) => {
// // // // //     const selectedCourseId = parseInt(e.target.value, 10);
// // // // //     const selectedCourse = courses.find((course) => course.id === selectedCourseId);

// // // // //     if (selectedCourse) {
// // // // //       setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Container>
// // // // //       <h2>Select Courses</h2>
// // // // //       <Form>
// // // // //         <Form.Group controlId="courseDropdown">
// // // // //           <Form.Label>Select Courses:</Form.Label>
// // // // //           <Form.Select onChange={handleDropdownChange} multiple>
// // // // //             <option value="" disabled>Select courses</option>
// // // // //             {courses.map((course) => (
// // // // //               <option key={course.id} value={course.id}>
// // // // //                 {course.name} - ${course.amount}
// // // // //               </option>
// // // // //             ))}
// // // // //           </Form.Select>
// // // // //         </Form.Group>
// // // // //       </Form>
// // // // //       <div>
// // // // //         <strong>Selected Courses:</strong>
// // // // //         <ul>
// // // // //           {selectedCourses.map((course) => (
// // // // //             <li key={course.id}>{course.name} - ${course.amount}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         <strong>Total Amount: ${calculateTotalAmount()}</strong>
// // // // //       </div>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default CourseSelectionDropdown;


// // // // // import React, { useState } from 'react';
// // // // // import { Container, Form } from 'react-bootstrap';

// // // // // const CourseSelectionRadio = () => {
// // // // //   const courses = [
// // // // //     { id: 1, name: 'Course A', amount: 50 },
// // // // //     { id: 2, name: 'Course B', amount: 75 },
// // // // //     { id: 3, name: 'Course C', amount: 100 },
// // // // //   ];

// // // // //   const [selectedCourses, setSelectedCourses] = useState([]);

// // // // //   const calculateTotalAmount = () => {
// // // // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // // // //   };

// // // // //   const handleRadioChange = (course) => {
// // // // //     const isCourseSelected = selectedCourses.some((selectedCourse) => selectedCourse.id === course.id);

// // // // //     if (isCourseSelected) {
// // // // //       setSelectedCourses((prevSelected) => prevSelected.filter((selectedCourse) => selectedCourse.id !== course.id));
// // // // //     } else {
// // // // //       setSelectedCourses((prevSelected) => [...prevSelected, course]);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Container>
// // // // //       <h2>Select Courses</h2>
// // // // //       <Form>
// // // // //         {courses.map((course) => (
// // // // //           <Form.Check
// // // // //             key={course.id}
// // // // //             type="radio"
// // // // //             label={`${course.name} - $${course.amount}`}
// // // // //             checked={selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)}
// // // // //             onChange={() => handleRadioChange(course)}
// // // // //           />
// // // // //         ))}
// // // // //       </Form>
// // // // //       <div>
// // // // //         <strong>Selected Courses:</strong>
// // // // //         <ul>
// // // // //           {selectedCourses.map((course) => (
// // // // //             <li key={course.id}>{course.name} - ${course.amount}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         <strong>Total Amount: ${calculateTotalAmount()}</strong>
// // // // //       </div>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default CourseSelectionRadio;


// // // // // import React, { useState } from 'react';
// // // // // import { Container, Form, Button } from 'react-bootstrap';

// // // // // const CourseSelectionRadio = () => {
// // // // //   const courses = [
// // // // //     { id: 1, name: 'Course A', amount: 50 },
// // // // //     { id: 2, name: 'Course B', amount: 75 },
// // // // //     { id: 3, name: 'Course C', amount: 100 },
// // // // //   ];

// // // // //   const [selectedCourses, setSelectedCourses] = useState([]);
// // // // //   const [amountPaid, setAmountPaid] = useState(0);

// // // // //   const calculateTotalAmount = () => {
// // // // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // // // //   };

// // // // //   const handleRadioChange = (course) => {
// // // // //     const isCourseSelected = selectedCourses.some((selectedCourse) => selectedCourse.id === course.id);

// // // // //     if (isCourseSelected) {
// // // // //       setSelectedCourses((prevSelected) => prevSelected.filter((selectedCourse) => selectedCourse.id !== course.id));
// // // // //     } else {
// // // // //       setSelectedCourses((prevSelected) => [...prevSelected, course]);
// // // // //     }
// // // // //   };

// // // // //   const handleAmountPaidChange = (e) => {
// // // // //     const newAmountPaid = parseFloat(e.target.value);
// // // // //     setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
// // // // //   };

// // // // //   const handlePaymentSubmit = () => {
// // // // //     // Handle payment logic here, e.g., update payment status, display receipts, etc.
// // // // //     console.log('Payment submitted:', {
// // // // //       selectedCourses,
// // // // //       amountPaid,
// // // // //       totalAmount: calculateTotalAmount(),
// // // // //     });
// // // // //   };

// // // // //   const calculateRemainingAmount = () => {
// // // // //     return calculateTotalAmount() - amountPaid;
// // // // //   };

// // // // //   return (
// // // // //     <Container>
// // // // //       <h2>Select Courses</h2>
// // // // //       <Form>
// // // // //         {courses.map((course) => (
// // // // //           <Form.Check
// // // // //             key={course.id}
// // // // //             type="radio"
// // // // //             label={`${course.name} - $${course.amount}`}
// // // // //             checked={selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)}
// // // // //             onChange={() => handleRadioChange(course)}
// // // // //           />
// // // // //         ))}
// // // // //       </Form>
// // // // //       <div>
// // // // //         <strong>Selected Courses:</strong>
// // // // //         <ul>
// // // // //           {selectedCourses.map((course) => (
// // // // //             <li key={course.id}>{course.name} - ${course.amount}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         <strong>Total Amount: ${calculateTotalAmount()}</strong>
// // // // //       </div>
// // // // //       <Form>
// // // // //         <Form.Group controlId="amountPaid">
// // // // //           <Form.Label>Amount Paid:</Form.Label>
// // // // //           <Form.Control
// // // // //             type="number"
// // // // //             value={amountPaid}
// // // // //             onChange={handleAmountPaidChange}
// // // // //           />
// // // // //         </Form.Group>
// // // // //         <strong>Remaining Amount: ${calculateRemainingAmount()}</strong>
// // // // //         <Button variant="primary" onClick={handlePaymentSubmit}>
// // // // //           Submit Payment
// // // // //         </Button>
// // // // //       </Form>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default CourseSelectionRadio;


// // // // import React, { useState } from 'react';
// // // // import { Container, Form, Button, Table } from 'react-bootstrap';

// // // // const CoursePaymentSystem = () => {
// // // //   const courses = [
// // // //     { id: 1, name: 'FULL STACK', amount: 5000 },
// // // //     { id: 2, name: 'JAVASCRIPT', amount: 3000 },
// // // //     { id: 3, name: 'FRONT END', amount: 2000 },
// // // //   ];

// // // //   const [selectedCourses, setSelectedCourses] = useState([]);
// // // //   const [amountPaid, setAmountPaid] = useState();
// // // // const[Amount, setAmount]=useState();

// // // //   const calculateTotalAmount = () => {
// // // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // // //   };

// // // //   const calculateRemainingAmount = () => {
// // // //     return calculateTotalAmount() - amountPaid;
// // // //   };

// // // //   const handleDropdownChange = (e) => {
// // // //     const courseId = parseInt(e.target.value, 10);
// // // //     const selectedCourse = courses.find((course) => course.id === courseId);

// // // //     const courseData = courses.find((c) => c.name === course);
// // // //     if (courseData) {
// // // //       setAmount(courseData.amount);
// // // //     } else {
// // // //       setAmount('');
// // // //     }
// // // //   };


// // // //   const handleAmountPaidChange = (e) => {
// // // //     const newAmountPaid = parseFloat(e.target.value);
// // // //     setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
// // // //   };

// // // //   const handlePaymentStatus = () => {
// // // //     const remainingAmount = calculateRemainingAmount();

// // // //     if (amountPaid === 0) {
// // // //       return 'Unpaid';
// // // //     } else if (remainingAmount === 0) {
// // // //       return 'Paid';
// // // //     } else {
// // // //       return `Partially Paid `;
// // // //     }
// // // //   };

// // // //   const handlePaymentSubmit = () => {
// // // //     // Handle payment logic here
// // // //     console.log('Payment submitted:', {
// // // //       selectedCourses,
// // // //       amountPaid,
// // // //       totalAmount: calculateTotalAmount(),
// // // //       paymentStatus: handlePaymentStatus(),
// // // //     });
// // // //   };

// // // //   return (
// // // //     <Container>
// // // //       <h2>Course Payment System</h2>
// // // //       <Form>
// // // //         <Form.Group controlId="courseDropdown">
// // // //           <Form.Label>Select Courses:</Form.Label>
// // // //           <Form.Select onChange={handleDropdownChange} multiple>
// // // //             <option value="" disabled>Select courses</option>
// // // //             {courses.map((course) => (
// // // //               <option key={course.id} value={course.id}>
// // // //                 {course.name} - Rs: {course.amount}
// // // //               </option>
// // // //             ))}
// // // //           </Form.Select>
// // // //         </Form.Group>
// // // //       </Form>

// // // //       <br></br>
// // // //       <Table striped bordered hover>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Course</th>
// // // //             <th>Amount</th>
// // // //           </tr>
// // // //         </thead>
        
// // // //         <tbody>
// // // //           {selectedCourses.map((course) => (
// // // //             <tr key={course.id}>
// // // //               <td>{course.name}</td>
// // // //               <td>Rs: {course.amount}</td>
// // // //             </tr>
// // // //           ))}
// // // //              <br></br>
// // // //           <strong>Total Amount:  Rs: {calculateTotalAmount()}</strong>
// // // //         </tbody>
// // // //       </Table>
// // // //       <Form>
// // // //         <Form.Group controlId="amountPaid">
// // // //           <Form.Label>Amount Paid:</Form.Label>
// // // //           <Form.Control
// // // //             type="number"
// // // //             value={amountPaid}
// // // //             onChange={handleAmountPaidChange}
// // // //           />
// // // //         </Form.Group>
// // // //         <br></br>
// // // //         <Button variant="success" disabled>
// // // //           {handlePaymentStatus()}
// // // //         </Button>



// // // //         <br></br>
// // // //         <br></br>

        
// // // //         <Button variant="primary" onClick={handlePaymentSubmit}>
// // // //           Submit Payment
// // // //         </Button>
       
        
// // // //       </Form>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default CoursePaymentSystem;

// // // import React, { useState } from 'react';
// // // import { Container, Form, Button, Table } from 'react-bootstrap';

// // // const CoursePaymentSystem = () => {
// // //   const courses = [
// // //     { id: 1, name: 'Course A', amount: 50 },
// // //     { id: 2, name: 'Course B', amount: 75 },
// // //     { id: 3, name: 'Course C', amount: 100 },
// // //   ];

// // //   const [selectedCourses, setSelectedCourses] = useState([]);
// // //   const [amountPaid, setAmountPaid] = useState(0);

// // //   const calculateTotalAmount = () => {
// // //     return selectedCourses.reduce((total, course) => total + course.amount, 0);
// // //   };

// // //   const calculateRemainingAmount = () => {
// // //     return calculateTotalAmount() - amountPaid;
// // //   };

// // //   const handleDropdownChange = (e) => {
// // //     const courseId = parseInt(e.target.value, 10);
// // //     const selectedCourse = courses.find((course) => course.id === courseId);

// // //     if (selectedCourse) {
// // //       setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
// // //     }
// // //   };

// // //   const handleAmountPaidChange = (e) => {
// // //     const newAmountPaid = parseFloat(e.target.value);
// // //     setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
// // //   };

// // //   const handlePaymentStatus = () => {
// // //     const remainingAmount = calculateRemainingAmount();

// // //     if (amountPaid === 0) {
// // //       return 'Unpaid';
// // //     } else if (remainingAmount === 0) {
// // //       return 'Paid';
// // //     } else {
// // //       return `Partially Paid (Remaining: $${remainingAmount})`;
// // //     }
// // //   };

// // //   const handlePaymentSubmit = () => {
// // //     // Handle payment logic here
// // //     console.log('Payment submitted:', {
// // //       selectedCourses,
// // //       amountPaid,
// // //       totalAmount: calculateTotalAmount(),
// // //       paymentStatus: handlePaymentStatus(),
// // //     });
// // //   };

// // //   return (
// // //     <Container>
// // //       <h2>Course Payment System</h2>
// // //       <Form>
// // //         <Form.Group controlId="courseDropdown">
// // //           <Form.Label>Select Courses:</Form.Label>
// // //           <Form.Select onChange={handleDropdownChange} multiple>
// // //             <option value="" disabled>Select courses</option>
// // //             {courses.map((course) => (
// // //               <option key={course.id} value={course.id}>
// // //                 {course.name} - ${course.amount}
// // //               </option>
// // //             ))}
// // //           </Form.Select>
// // //         </Form.Group>
// // //       </Form>
// // //       <Table striped bordered hover>
// // //         <thead>
// // //           <tr>
// // //             <th>Course</th>
// // //             <th>Amount</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {selectedCourses.map((course) => (
// // //             <tr key={course.id}>
// // //               <td>{course.name}</td>
// // //               <td>${course.amount}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </Table>
// // //       <Form>
// // //         <Form.Group controlId="amountPaid">
// // //           <Form.Label>Amount Paid:</Form.Label>
// // //           <Form.Control
// // //             type="number"
// // //             value={amountPaid}
// // //             onChange={handleAmountPaidChange}
// // //           />
// // //         </Form.Group>
// // //         <strong>Total Amount: ${calculateTotalAmount()}</strong>
// // //         <Button variant="primary" onClick={handlePaymentSubmit}>
// // //           Submit Payment
// // //         </Button>
// // //         <Button variant="success" disabled>
// // //           {handlePaymentStatus()}
// // //         </Button>
// // //       </Form>
// // //     </Container>
// // //   );
// // // };

// // // export default CoursePaymentSystem;


// import React, { useState } from 'react';
// import { Container, Form, Button, Table, Badge } from 'react-bootstrap';

// const CourseInvoiceSystem = () => {
//   const courses = [
//     { id: 1, name: 'Course A', amount: 50 },
//     { id: 2, name: 'Course B', amount: 75 },
//     { id: 3, name: 'Course C', amount: 100 },
//   ];

//   const [selectedCourses, setSelectedCourses] = useState([]);
//   const [amountPaid, setAmountPaid] = useState(0);

//   const calculateTotalAmount = () => {
//     return selectedCourses.reduce((total, course) => total + course.amount, 0);
//   };

//   const calculateRemainingAmount = () => {
//     return calculateTotalAmount() - amountPaid;
//   };

//   const handleDropdownChange = (e) => {
//     const courseId = parseInt(e.target.value, 10);
//     const selectedCourse = courses.find((course) => course.id === courseId);

//     if (selectedCourse) {
//       setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
//     }
//   };

//   const handleAmountPaidChange = (e) => {
//     const newAmountPaid = parseFloat(e.target.value);
//     setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
//   };

//   const handlePaymentStatus = () => {
//     const remainingAmount = calculateRemainingAmount();

//     if (amountPaid === 0) {
//       return <Badge bg="danger">Unpaid</Badge>;
//     } else if (remainingAmount === 0) {
//       return <Badge bg="success">Paid</Badge>;
//     } else {
//       return (
//         <Badge bg="warning">
//           Partially Paid (Remaining: ${remainingAmount})
//         </Badge>
//       );
//     }
//   };

//   const handlePaymentSubmit = () => {
//     // Handle payment logic here
//     console.log('Payment submitted:', {
//       selectedCourses,
//       amountPaid,
//       totalAmount: calculateTotalAmount(),
//       paymentStatus: handlePaymentStatus(),
//     });
//   };

//   return (
//     <Container>
//       <h2>Course Invoice System</h2>
//       <Form>
//         <Form.Group controlId="courseDropdown">
//           <Form.Label>Select Courses:</Form.Label>
//           <Form.Select onChange={handleDropdownChange} multiple>
//             {courses.map((course) => (
//               <option key={course.id} value={course.id}>
//                 {course.name} - ${course.amount}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>
//       </Form>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedCourses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.name}</td>
//               <td>${course.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <Form>
//         <Form.Group controlId="amountPaid">
//           <Form.Label>Amount Paid:</Form.Label>
//           <Form.Control
//             type="number"
//             value={amountPaid}
//             onChange={handleAmountPaidChange}
//           />
//         </Form.Group>
//         <strong>Total Amount: ${calculateTotalAmount()}</strong>
//         <Button variant="primary" onClick={handlePaymentSubmit}>
//           Submit Payment
//         </Button>
//         <div>{handlePaymentStatus()}</div>
//       </Form>
//     </Container>
//   );
// };

// export default CourseInvoiceSystem;
import React, { useState } from 'react';
import { Container, Form, Button, Table, Badge } from 'react-bootstrap';

const CourseInvoiceSystem = () => {
  const courses = [
    { id: 1, name: 'FULL STACK', amount: 5000},
    { id: 2, name: 'JAVASCRIPT', amount: 3000 },
    { id: 3, name: 'FRONTEND', amount: 2000 },
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [amountPaid, setAmountPaid] = useState();

  const calculateTotalAmount = () => {
    return selectedCourses.reduce((total, course) => total + course.amount, 0);
  };

  const calculateRemainingAmount = () => {
    return calculateTotalAmount() - amountPaid;
  };

  const handleDropdownChange = (e) => {
    const courseId = parseInt(e.target.value, 10);
    const selectedCourse = courses.find((course) => course.id === courseId);

    if (selectedCourse) {
      setSelectedCourses((prevSelected) => [...prevSelected, selectedCourse]);
    }
  };

  const handleAmountPaidChange = (e) => {
    const newAmountPaid = parseFloat(e.target.value);
    setAmountPaid(isNaN(newAmountPaid) ? 0 : newAmountPaid);
  };

  const handleDeleteCourse = (courseId) => {
    setSelectedCourses((prevSelected) => prevSelected.filter((course) => course.id !== courseId));
  };

  const handlePaymentStatus = () => {
    const remainingAmount = calculateRemainingAmount();

    if (amountPaid === 0) {
      return <Badge bg="danger">Unpaid</Badge>;
    } else if (remainingAmount === 0) {
      return <Badge bg="success">Paid</Badge>;
    } else {
      return (
        <Badge bg="warning">
          Partially Paid (Remaining: Rs: {remainingAmount})
        </Badge>
      );
    }
  };

  const handlePaymentSubmit = () => {
    // Handle payment logic here
    console.log('Payment submitted:', {
      selectedCourses,
      amountPaid,
      totalAmount: calculateTotalAmount(),
      paymentStatus: handlePaymentStatus(),
    });
  };

  return (
    <Container>
      <h2>Course Invoice System</h2>
      <Form>
        <Form.Group controlId="courseDropdown">
          <Form.Label>Select Courses:</Form.Label>
          <Form.Select onChange={handleDropdownChange} multiple>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name} - Rs: {course.amount}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Course</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          {selectedCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>Rs: {course.amount}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteCourse(course.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <br></br>
        </tbody>
      </Table>
      <strong>Total Amount: Rs: {calculateTotalAmount()}</strong>
      <br></br>
      
      <Form>
        <Form.Group controlId="amountPaid">
          <Form.Label>Amount Paid:</Form.Label>
          <Form.Control
            type="number"
            value={amountPaid}
            onChange={handleAmountPaidChange}
          />
        </Form.Group>
        <br></br>
        <div>{handlePaymentStatus()}</div>
        <br></br>
        <Button variant="primary" onClick={handlePaymentSubmit}>
          Submit Payment
        </Button>
        
      
      </Form>
    </Container>
  );
};

export default CourseInvoiceSystem;

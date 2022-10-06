import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { SERVER_URL } from '../constants.js'
import axios from 'axios';

const Registration = () => {

    const [loading, setLoading] = useState(false)

    const [student, setStudent] = useState({
        studentEmail: "",
        studentName: "",
        course_id: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setStudent({ ...student, [e.target.name]: value });
    }

    const saveStudent = (e) => {
        e.preventDefault();
        setLoading(false);
        console.log("Student.Save");
        axios.post(SERVER_URL + "/enrollment", student)
            .then((respone) => {
                console.log(respone);
                setLoading(true);
            }).catch((error) => {
                console.log(error);
            })
    }


    return (
        <>
            <div className="container mt-4">
                {loading && (
                    <div className="alert alert-success">Student added</div>
                )}
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Student Email</label>
                        <input type="email" name='studentEmail' value={student.studentEmail} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Student Name</label>
                        <input type="text" name='studentName' value={student.studentName} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Student Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Course ID</label>
                        <input type="number" name='course_id' value={student.course_id} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Course ID" />
                    </div>
                    <button onClick={(e) => saveStudent(e)} className="btn btn-primary">Add New Student</button>
                </form>
            </div>
        </>
    )
}

export default Registration
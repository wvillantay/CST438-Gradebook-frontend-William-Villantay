import axios from 'axios';
import React, { useState } from 'react'
import { SERVER_URL } from '../constants';

const AddAssignment = () => {

    const [loading, setLoading] = useState(false);

    const [assignment, setAssignment] = useState({
        name: "",
        dueDate: "",
        needsGrading: "",
        course_id: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setAssignment({ ...assignment, [e.target.name]: value });
    }

    const saveAssignment = (e) => {
        e.preventDefault();
        setLoading(false);
        console.log("Assignmet.Save");
        axios.post(SERVER_URL + "/assignment", assignment)
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
                    <div className="alert alert-success">Assignment Added</div>
                )}
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Assignment Name</label>
                        <input type="text" name='name' value={assignment.name} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Assignment Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Due Date</label>
                        <input type="date" name='dueDate' value={assignment.dueDate} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Course ID</label>
                        <input type="number" name='course_id' value={assignment.course_id} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Course ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Need Grading</label>
                        <input type="number" name='needsGrading' value={assignment.needsGrading} onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Course ID" />
                    </div>
                    <button onClick={(e) => saveAssignment(e)} className="btn btn-primary">Add New Assignment</button>
                </form>
            </div>
        </>
    )
}

export default AddAssignment
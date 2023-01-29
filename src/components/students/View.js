import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const View = () => {
    const param = useParams();
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();

    const callGetStudentList = async () => {
        const studentView = await axios.get(`http://localhost:3004/students/${param.id}`);
        setStudent(studentView.data)
    }

    useEffect(() => {
        callGetStudentList();
    }, [param.id]);

    const homePage = () => {
        navigate('/');
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Student detail page</h3>
            <h4 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={homePage}>Back to home page</h4>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '2%' }}>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ textAlign: 'center' }}>
                        <td>{student.id}</td>
                        <td>{student.username}</td>
                        <td>{student.email}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default View;
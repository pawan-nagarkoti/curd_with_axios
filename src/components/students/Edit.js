import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [student,setStudent] = useState({
        username: '',
        email: ''
    });
    const homePage = () => {
        navigate('/');
    }

    const callGetStudentData = async()=>{
        try{
            const studentData = await axios.get(`http://localhost:3004/students/${param.id}`);
            setStudent(studentData.data)
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        callGetStudentData();
    },[param.id]);

    const updateStudentDetail = async()=>{
        await axios.put(`http://localhost:3004/students/${param.id}`,student);
        navigate('/');
    }

    const studentList = (e)=>{
        const  name = e.target.name;
        const value = e.target.value;
        setStudent((pre)=>{
            return {...pre,[name]: value}
        })
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Edit Student</h3>
            <h4 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={homePage}>Back to home page</h4>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <input type='text' placeholder='Enter your name' name='username' value={student.username} onChange={(e)=>studentList(e)}/>
                <input type='email' placeholder='Enter your email' name='email' value={student.email} onChange={(e)=>studentList(e)}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <button onClick={updateStudentDetail}>Update</button>
            </div>
        </>
    )
}

export default Edit;
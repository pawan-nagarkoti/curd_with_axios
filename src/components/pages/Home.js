import axios from "axios";
import { useState } from "react";
import List from "../students/List";

const Home = () => {
    const [status, setStatus] = useState(false);
    const [student, setStudent] = useState({
        username: '',
        email: '',
    });
    const studentField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setStudent((pre) => {
            return { ...pre, [name]: value }
        })
    }

    const addStudentDetail = async () => {
        await axios.post('http://localhost:3004/students', student);
        setStatus(true)
    }

    if(status){
        return <Home/>
    }
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>CURD Operation with json server</h3>
            <h4 style={{ textAlign: 'center' }}>Add Students</h4>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <input type='text' placeholder='Enter your name' name='username' value={student.username} onChange={studentField} />
                <input type='email' placeholder='Enter your email' name='email' value={student.email} onChange={studentField} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <button onClick={addStudentDetail}>Add</button>
            </div>
            <List />
        </>
    )
}

export default Home;
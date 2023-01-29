import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const List = () => {
    const getStudentUrl = 'http://localhost:3004/students';
    const [student, setStudent] = useState([]);
    const callGetStudentData = async () => {
        const getDataStored = await axios.get(getStudentUrl);
        setStudent(getDataStored.data);
    }
    useEffect(() => {
        callGetStudentData();
    }, []);
    
    const studentRecordDelete = async(id)=>{
        try{
            await axios.delete(`http://localhost:3004/students/${id}`);
            const studentData = student.filter((item)=>{
                return item.id !== id;
            });
            setStudent(studentData);
        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Student List</h3>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '2%' }}>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    student.map((value, i) => {
                        const { id, username, email } = value;
                        return (
                            <>
                                <tbody key={i}>
                                    <tr style={{ textAlign: 'center' }}>
                                        <td>{id}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>
                                            <Link to={`view/${id}`}>
                                                <button>view</button>
                                            </Link>
                                            <Link to={`edit/${id}`}>
                                                <button>edit</button>
                                            </Link>
                                            <button onClick={()=>studentRecordDelete(id)}>delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    }) 
                }
            </table>
        </>
    )
}

export default List;
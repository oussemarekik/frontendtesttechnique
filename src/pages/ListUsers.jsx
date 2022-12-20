import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from 'mdb-react-ui-kit';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import {api} from "../api/Api";
import {configure} from "@testing-library/react";
import {Apiaxios} from "../api/Axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


export function ListUsers() {
    const navigate = useNavigate();
    const [users,setUsers]=useState([]);
    const [refresh,setRefresh]=useState(false);
    const supprimer=(event)=>{
        console.log("hoou",event.target.value)
        Apiaxios.delete(`users/${event.target.value}`)
        setRefresh(!refresh)
    }
    const logout=()=>{
        Apiaxios.post("logout")
        localStorage.removeItem("token")
        navigate('/')
    }
    const listElemetn= users.map((value, index)=>{
        return <tr>
                <th scope='row'>{index+1}</th>
                <td>{value.email}</td>
                <td>{value.name}</td>
            <td>
            <MDBBtn color='link' size='sm' value={value.id} onClick={supprimer}>
                <i className='fas fa-times' ></i>
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm'>
                <Link to={'/modifier/'+value.id}>Edit</Link>
            </MDBBtn>
            </td>
            </tr>
        });

    useEffect(()=>{
        if(localStorage.getItem("token")==null){
            navigate("/")
        }

        axios.get(api+"users",{headers:  {
                authorization :`Bearer ${localStorage.getItem("token")}`
            }}).then((res)=>{
            console.log(res.data)

                setUsers(res.data)
                console.log("users",users)

            }
        )

    },[refresh])

    return(<div>
            <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">
                <Link to={"/add"}>Ajouter</Link>
            </button>
            <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>

            <MDBTable>
            <MDBTableHead light>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Nom</th>
                    <th scope='col'>Handle</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {listElemetn}


            </MDBTableBody>

        </MDBTable>
        </div>
    );
}
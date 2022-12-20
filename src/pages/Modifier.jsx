import {MDBBtn, MDBCheckbox, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import axios from 'axios';
import  {api} from "../api/Api";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

import { useCookies } from 'react-cookie'
import {useNavigate,useParams} from "react-router-dom";
import {Apiaxios} from "../api/Axios";



export const Modifier = () => {
    let { id } = useParams();
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [user,setUser]=useState({});
    const navigate = useNavigate();

    const handel =()=> {
        Apiaxios.put('users/'+id,{
            "name":name,
            "email":email
        })
        navigate('/list')

    }
    useEffect(() => {
        if(localStorage.getItem("token")==null){
            navigate("/")
        }
        const fetchData=async ()=>{
            const data=  await Apiaxios.get( 'users/'+id)
            return data
        }
        console.log(fetchData())
        fetchData().then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
        }

        ).catch(console.error)


    }, [id]);

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput wrapperClass='mb-4' label='Name' id='form0' type='text'value={name} onChange={event => setName(event.target.value) }/>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'value={email} onChange={event => setEmail(event.target.value) }/>



            <MDBBtn className="mb-4" onClick={handel}>Modifier</MDBBtn>



        </MDBContainer>
    )
}
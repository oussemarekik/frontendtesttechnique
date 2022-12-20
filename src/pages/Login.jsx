import {MDBBtn, MDBCheckbox, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import axios from 'axios';
import  {api} from "../api/Api";
import {useState} from "react";
import {logDOM} from "@testing-library/react";
import { Outlet, Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import {useNavigate} from "react-router-dom";



export const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const handel =()=> {
        console.log(password)
        axios.post(api + 'login', {
            email: email,
            password: password
        }).then((res)=>{
            console.log(res.data.authorisation)
            localStorage.setItem("token", res.data.authorisation.token)
            navigate("list")

        },(er)=>{
            console.log(er)
        })


    }
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'value={email} onChange={event => setEmail(event.target.value) }/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'value={password} onChange={event => setPassword(event.target.value) }/>

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>

            <MDBBtn className="mb-4" onClick={handel}>Sign in</MDBBtn>
            <div className="text-center">
                <p>Not a member? <Link to="register">Register</Link></p>
                <p>or sign up with:</p>
            </div>


        </MDBContainer>
    )
}
import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import Axios from 'axios'
import "./Login.css"

function Login() {
  const [userName,setUserName]=useState();
  let navigation=useNavigate();
  const[password,setPassword]=useState();
  const handleUsername=(event)=>{
    setUserName(event.target.value);
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value);
  }
  const register =(event)=>{
    event.preventDefault();
    console.log("00000",userName,password)
    Axios.post("http://localhost:9999/register",{
      username:userName,
      password:password,
    }).then((response)=>{
      console.log(response);
      if(response.data.successfull){
        console.log("9999")
        navigation('/home')

      } 
      else{
        alert("wrong id or password")
      }
    });
  };

  return (
   <div class="login">
<div class="form">
  <form class="login-form">
    <span class="material-icons">lock</span>
    <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={(e)=>{handleUsername(e)}}/>
    <input type="password"  onChange={(e)=>{handlePassword(e)}} placeholder="password" required i />
    <div style={{marginBottom:"5px"}}> 
   <button onClick={register}> login </button> 
 
    </div>
   

  </form>  
</div>
</div> 
    
   
  )
}
export default Login;



{/* <div class="login">
<div class="form">
  <form class="login-form">
    <span class="material-icons">lock</span>
    <input type="text" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
    <input type="password" placeholder="password" required />
    
    <Link to="/home"> <button>login</button> </Link>
  </form>  
</div>
</div> */}
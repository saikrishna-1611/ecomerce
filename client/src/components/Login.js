import {useState,useEffect} from "react";
import { loginUser } from "../../api";
const Login =()=>{
    const [email,setemail] =useState("");
    const [password,setpassword]=useState("");
    useEffect(()=>{
     console.log("useeffect rendered")
    },[email])
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const { data } = await loginUser({ email, password });
          localStorage.setItem('token', data.token);
          console.log(data)
          alert('Login successful');
        } catch (error) {
          alert('Login failed: ' + error.response.data.message);
        }
      };

    return (
        <form onSubmit={handleLogin} className="login">
          <input onChange={(e)=>{setemail(e.target.value)}} type="text" value={email} placeholder="enter valid email id" />
          <input onChange={(e)=>{setpassword(e.target.value)}}type="password" value= {password} placeholder="enter password"/>
         <button type="submit" placeholder="submit">LOGIN</button>
        </form>
    )
}

export default Login;
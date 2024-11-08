import {useState} from "react";
import { registerUser } from "../../api";
const Register =()=>{
    const [formData,setFormData]=useState({name:" ",email:" ",password:" "});

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const { data } = await registerUser(formData);
          console.log(data);
          alert('Registration successful');
        } catch (error) {
          alert('Registration failed: ' + error.response.data.message);
        }
      };
      return (
        <form className="register" onSubmit={handleRegister}>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      );
}

export default Register;
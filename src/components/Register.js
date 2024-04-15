import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    hobbies: '',
    profile_pic: null
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
      setFormData({ ...formData, profile_pic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.gender || !formData.hobbies || !formData.profile_pic) {
        setErrors('All fields are required!');
        return;
    }
    // const { firstname, lastname, email, password, gender, hobbies} = formData;


    try {

      const response = await axios.post('http://localhost:5000/api/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status >= 200) {
        console.log('Registered successfully.');
        navigate('/');
      } else {
        console.log(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error registering user:', error.message || JSON.stringify(error));
    }
    
    };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center"> {/* Center the form */}
        <div className="col-md-6"> {/* Limit the width */}
          <h2>Register Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">firstName</label>
              <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} isInvalid={!!errors.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">lastName</label>
              <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} isInvalid={!!errors.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">email</label>
              <textarea className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">password</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} isInvalid={!!errors.password} />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">gender </label>
              <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} isInvalid={!!errors.cPassword} />
            </div>
            <div className="mb-3">
              <label htmlFor="hobbies" className="form-label">hobbies </label>
              <input type="text" className="form-control" id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange} isInvalid={!!errors.cPassword} />
            </div>
            <div className='mb-3'>
              <label htmlFor="profile_pic" className="form-label">profile_pic</label>
              <input type="file" className="form-control" id="profile_pic" name="profile_pic" onChange={handleFileChange} />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
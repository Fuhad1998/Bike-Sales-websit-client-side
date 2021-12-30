import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => { 
        console.log(data)
        setEmail(data)
        // const user = {email}
        fetch('https://boiling-falls-05013.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)
               
                alert('success')
            }
            
        })
      
      
    };
    return (
        <div>
            <h1 className="text-center">Make A Admin</h1>
            <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
          <input className="" {...register("email")} placeholder="Write your email"  type="email" />
          <br />
          
         
          <input
            className="btn-submit"
            type="submit"
            value="Please Make Admin"
          />
          
        </form>
        </div>
    );
};

export default MakeAdmin;
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const initialValues ={
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: ""
}

const UserFrom = ({getUsers, userSelected, deselectedUser}) => {
    
    
    const{handleSubmit, register, reset} = useForm()

    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }else{
            reset(initialValues)
        }
    },[userSelected])

    const submit = (data) =>{
        console.log(data)
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() =>{
                    getUsers()
                    deselectedUser()
                })
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
        }
    }

    return (
        <form
            className='user-form'
            onSubmit={handleSubmit(submit)}
        >
           <div className='div-conteiner__form'>
                <h1>New User</h1>
                <div className='name-container'>
                    <div className='first-name'>
                        <label htmlFor="first_name"><i className="fa-solid fa-user"></i> </label>
                        <input {...register("first_name")} type="text" id='first_name' placeholder='FIRST NAME' />
                    </div>
                    <div className='last-name'>
                        <input {...register("last_name")} type="text" id='last_name' placeholder='LAST NAME' />
                    </div>
                </div>
                <div className='input-container'>
                    <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                    <input {...register("email")} type="email" id='email' placeholder='EMAIL' />
                </div>
                <div className='input-container'>
                    <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                    <input {...register("password")} type="password" id='password' placeholder='PASSWORD' />
                </div>
                <div className='input-container'>
                    <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                    <input {...register("birthday")} type="date" id='birthday' />
                </div>
                <button className='button-upload'>upload</button>
           </div>
        </form>
    );
};

export default UserFrom;
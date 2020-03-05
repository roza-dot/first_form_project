import React, { useState } from 'react';

const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
        
                <label>First Name</label>
                <input class= "inputbox" type="text" name="firstName" onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
                <input class= "inputbox" type="text" name="lastName" onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input class= "inputbox" type="email" name="email" onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input class= "inputbox" type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input class= "inputbox" type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/> 
                <input type="submit" />  
                <h5 class= "form_data">Your Form Data</h5>   
            </form>
            <div>
                <p>First Name:{formState.firstName}</p>
                <p>Last Name:{formState.lastName}</p>
                <p>Email: {formState.Email}</p>
                <p>Password: {formState.password}</p>
            </div>
        </div>
    );
}
export default RegisterForm;
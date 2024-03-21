import { useState } from 'react';
import { loginFields } from './formFields';
import Input from './Input';
import FormAction from './FormAction';
import FormExtra from './FormExtra';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const navigate = useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit= async (e) =>{
        e.preventDefault(); 
        try { 
            const { email, password } = loginState;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; 
            console.log("User signed in: ", user); 
        } catch (error) { 
            console.error("Error signing in: ", error);
        }
        
    }

    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    )
}
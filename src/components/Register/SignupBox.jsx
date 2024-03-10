import { useState } from "react";
import { signupFields } from "./formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields; 
let fieldsState = {}; 

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup(){
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => {
        setSignupState({...signupState, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        registerUser(); 
    }

    // signup api handling 
    const registerUser = () => {
        console.log(signupState);
    } 


    return(
        <form className="mt-8 space-y-6">
            <div className="pb-2">
                {
                    fields.map(field => 
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
            <FormAction handleSubmit={handleSubmit} text="Signup"/>
        </form>
    )
}
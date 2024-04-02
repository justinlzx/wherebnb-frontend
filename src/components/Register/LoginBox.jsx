import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { loginFields } from './formFields';
import Input from './Input';
import FormAction from './FormAction';
import FormExtra from './FormExtra';

// Create a context to manage the form data
const FormContext = createContext();

// Custom hook to use the form context
const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({});
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('loginState'));
    if (storedData) {
      setLoginState(storedData);
    }
  }, []);

  const updateFormData = (data) => {
    const updatedData = { ...data, userId: 1 };                        // Append userId = 1
    setLoginState(updatedData);                                       // Set loginState to contain the updated data
    localStorage.setItem('loginState', JSON.stringify(updatedData)); // Store updated loginState in localStorage
  };
  
  return (
    <FormContext.Provider value={{ loginState, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Login component
export const Login = () => {
  const { loginState, updateFormData } = useFormContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;                                // 1. Collects data from form input
    const updatedState = { ...loginState, [id]: value };          // 2. Maps field id (e.g. email-address) from formFields.js to input value
    updateFormData(updatedState);                                // 3. Calls updateFormData with the above hashmap as parameter
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to another page upon successful login
    navigate('/');
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {loginFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id] || ''}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormExtra />
      <FormAction text="Login" />
    </form>
  );
};
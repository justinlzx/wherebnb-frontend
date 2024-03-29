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

const FormProvider = ({ children }) => {
  const [loginState, setLoginState] = useState({});
  
  // Load stored data when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('loginState'));
    if (storedData) {
      setLoginState(storedData);
    }
  }, []);

  // Function to update form data
  const updateFormData = (data) => {
    setLoginState(data);
    localStorage.setItem('loginState', JSON.stringify(data));
  };

  return (
    <FormContext.Provider value={{ loginState, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Login component
const Login = () => {
  const { loginState, updateFormData } = useFormContext();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedState = { ...loginState, [id]: value };
    updateFormData(updatedState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to another page upon successful login
    navigate('/reviews');
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


// App component
const App = () => {
  return (
    <FormProvider>
      <Routes>
        <Route path="/reviews" />
        <Route path="/" element={<Login />} />
      </Routes>
    </FormProvider>
  );
};

export default App;

import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useLocation  } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation(); 


//hide from home page 
  if (location.pathname === "/") {
    return null;
  }

  return (
    <IconButton onClick={() => navigate(-1)} aria-label="back">
      <ArrowBackIcon />
    </IconButton>
  );
};



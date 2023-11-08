import React, { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';

export default function PrescriptionManagement() {

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in (e.g., check if a token or user data exists in local storage)
    const pharmacyId = localStorage.getItem('pharmacyId');
    if (!pharmacyId) {
      navigate('/Pharmlogin'); // Redirect to the dashboard if logged in
    }
  }, [navigate]);

  return (
    <div>
      
    </div>
  )
}

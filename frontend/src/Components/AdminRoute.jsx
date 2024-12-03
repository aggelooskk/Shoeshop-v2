import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  // If no token, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Render children if logged in
};

export default AdminRoute;
import React from "react";
import { useLocation } from "react-router-dom";

interface DashboardProps {
  email?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");
  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Email do usuário: {email}</p>
    </div>
  );
};

export default Dashboard;

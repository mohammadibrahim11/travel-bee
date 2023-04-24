import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import { AuthContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(user);

  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoutes;

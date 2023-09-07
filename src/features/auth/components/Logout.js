import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // but useEfffect runs after render, so we need to delay navigate part
  useEffect(() => {
    dispatch(signOutAsync());
  });
  return (
    <>
      {!user && (
        <Navigate to="/" replace={true}>
          {" "}
        </Navigate>
      )}
    </>
  );
}

export default Logout;

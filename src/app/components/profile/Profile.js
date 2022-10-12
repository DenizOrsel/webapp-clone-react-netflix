import React from "react";
import "./Profile.css";
import Nav from "../layout/Nav";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase";
import PlanScreen from "./PlanScreen";


const Profile = () => {
    const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinkpaEjVFBcW2Qp3MUAlHf3FhFSeMs728b3epQ3J4K95o37SuG_WeFTCj0fPI9z0RVdE&usqp=CAU"
            alt="Avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

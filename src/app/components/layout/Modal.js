import React, { useRef } from "react";
import "./Modal.css";
import { auth } from "../../../firebase";

const Modal = () => {
const emailRef = useRef(null);
const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In / Up</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn} className="loginScreen__getStarted">
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default Modal;

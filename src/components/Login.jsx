import React, { useState } from 'react';
import Header from './Header';
import { checkValidata } from '../utils/validate';
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Avatar, LOGO } from '../utils/constant';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, setErrormsg] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
const navigate = useNavigate();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    // Validate form data
    const msg = checkValidata(email, pass);
    setErrormsg(msg);
    if (msg) return;

    // Sign in / Sign up logic
    if (!isSignInForm) {
      // Signup logic
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: Avatar,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            

          }).catch((error) => {
            setErrormsg(error.message)
          });
          
          
          // Additional logic if needed
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          const user = userCredential.user;
       
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={LOGO} alt="img" />
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleClick(); }} className="w-full md:w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Username"
          className="p-4 my-3 w-full bg-gray-700 bg-opacity-40"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 bg-opacity-40"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 bg-opacity-40"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          type="submit"
        >
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign-Up Now" : "Already have an account? Sign-In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

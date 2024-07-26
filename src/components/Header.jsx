import React from 'react'
import Body from './Body'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Img } from '../utils/constant'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
        const {uid,email,displayname,photoURL}= user;
        dispatch(addUser({uid:uid , email:email,
           displayname:displayname, 
           photoURL:photoURL}));
          navigate("/browse")
         } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
      return ()=>unsubscribe();
},[]);
  return (
    <>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
    <img className='w-52 mx-auto md:mx-0 ' src={Img} alt="logo"></img>
   { user && (<div className='px-8 py-2   flex'>
    <img className=' hidden md:block  w-17 h-12  ' src={"https://occ-0-3194-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"} alt="logo"></img>
    <button onClick={handleSignOut} className='mx-3 text-white font-bold '> Sign Out</button>
    </div>)}
    </div>
    
    </>
  )
}

export default Header

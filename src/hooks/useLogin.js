import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthStore } from "../hooks";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const provider = new GithubAuthProvider();
  const { startRegister, startLogin } = useAuthStore();
  const googleProvider = new GoogleAuthProvider();

  const registerGithub = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      const user = res.user;
    
      setIsPending(false)
      startRegister({
        name: user.name,
        email: user.email,
        password: user.uid,
        avatar: user.photoURL,
        google:true
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  const registreGoogle = async () => {
    setError(null);
    setIsPending(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
     
      if (!result) {
        throw new Error("Could not complete signup");
      }
      const user = result.user;
      
      setIsPending(false)
      startRegister({
        name: user.displayName,
        email: user.email,
        password: user.uid,
        avatar: user.photoURL,
        google: user.emailVerified
      });
   
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  const loginGithub = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      const user = res.user;
      setIsPending(false)
      startLogin({
        email: user.email,
        password: user.uid,
      });
  
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  

  const loginGoogle = async () => {
    setError(null);
    setIsPending(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (!result) {
        throw new Error("Could not complete signup");
      }
      const user = result.user;
      setIsPending(false)
      startLogin({
        email: user.email,
        password: user.uid,
      });
   
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { registerGithub, loginGithub, registreGoogle, loginGoogle,isPending };
};

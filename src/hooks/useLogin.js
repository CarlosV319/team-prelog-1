import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthStore } from "../hooks";

export const useLogin = () => {
  const provider = new GithubAuthProvider();
  const { startRegister, startLogin } = useAuthStore();
  const googleProvider = new GoogleAuthProvider();

  const registerGithub = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      const user = res.user;
      startRegister({
        name: user.name,
        email: user.email,
        password: user.uid,
        avatar: user.photoURL,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginGithub = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }
      const user = res.user;
      startLogin({
        email: user.email,
        password: user.uid,
      });
  
    } catch (error) {
      console.log(error);
    }
  };

  const registreGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
     
      if (!result) {
        throw new Error("Could not complete signup");
      }
      const user = result.user;
      startRegister({
        name: user.name,
        email: user.email,
        password: user.uid,
        avatar: user.photoURL,
      });
   
    } catch (error) {
      console.log(error);
    }
  };

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (!result) {
        throw new Error("Could not complete signup");
      }
      const user = result.user;
      startLogin({
        email: user.email,
        password: user.uid,
      });
   
    } catch (error) {
      console.log(error);
    }
  };

  return { registerGithub, loginGithub, registreGoogle, loginGoogle };
};

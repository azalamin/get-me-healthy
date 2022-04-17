import React, { useEffect } from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import github from "../../images/github.png";
import google from "../../images/google-logo.png";
import Loading from "../../Loading/Loading";
import './SocialSignIn.css';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (user || githubUser) {
        navigate("/");
      }
    }, [user, githubUser]);

    if (loading || githubLoading) {
        return <Loading></Loading>
    }
    
  return (
    <div className="mt-5">
      <p className="social-btn" onClick={() => signInWithGoogle()}>
        <img width={30} src={google} alt="" />
        <span>Continue with Google</span>
      </p>
      <p className="social-btn" onClick={() => signInWithGithub()}>
        <img width={30} src={github} alt="" />
        <span>Continue with Github</span>
      </p>
      <p className="text-danger mt-3">
        {error?.message || githubError?.message}
      </p>
    </div>
  );
};

export default SocialSignIn;

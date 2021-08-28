// import { useState, useEffect } from "react"
// import ContainerSmall from "./ContainerSmall"
import { Link } from "react-router-dom"
import "../pages/auth.scss"
export default function auth({setAuth}) {
  //e.target to handle form
      //client side check username and password
      //conditional get or put request
      //provide response
      //redirect
    const auth = ()=>{
        // const login ={
        //   username: document.getElementById("username").value,
        //   password: document.getElementById("password").value
        // }

        // fetch ("/server/auth", auth).then ((resp)=>{
        //   setAuth (resp.token)
        // });
        
    }
  return (
    <div>
      {/* main container from App.scss */}
      <section className="main-container">
        {/* container that binds both the sign in and sign up divs together */}
        <section className="auth-wrapper">
          {/* container for just the sign in text */}
          <article className="auth-content">
            <div className="auth-item">
              <h2 className="title">Sign In</h2>
            </div>
            <div className="auth-item">
              <p>username</p>
              <input type="text" id='username' placeholder='Enter Username'/>
            </div>
            <div className="auth-item">
              <p>password</p>
              <input type="text" id='password' placeholder='Enter Password'/>
            </div>
            <div className="auth-item">
              <button className="submit-btn" onClick={auth}>submit</button>
            </div>
            <div className="auth-item">
              <Link to="" exact>
                <button className="back-btn">back</button>
              </Link>
            </div>
          </article>
          {/* container for just the sign up text */}
          <article className="auth-content">
            <div className="auth-item">
              <h2 className="title">Sign Up</h2>
            </div>
            <div className="auth-item">
              <p>username</p>
              <input type="text" id='username' placeholder='Create Username'/>
            </div>
            <div className="auth-item">
              <p>password</p>
              <input type="text" id='password' placeholder='Create Password'/>
            </div>
            <div className="auth-item">
              <button className="submit-btn" onClick={auth}>submit</button>
            </div>
            <div className="auth-item">
              <Link to="" exact>
                <button className="back-btn">back</button>
              </Link>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}

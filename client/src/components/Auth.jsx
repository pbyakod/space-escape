import "../App.scss"
// import { useState, useEffect } from "react"
// import ContainerSmall from "./ContainerSmall"
import { Link } from "react-router-dom"
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
    
      <section className="containerLarge">
        <h1 className="title">Auth Page</h1>
        <article className="containerSmall">
          <div className="">
        <h2 className="title">Sign In</h2>
        <p>username</p>
        <input type="text" id='username'/>
        <p>password</p>
        <input type="text" id='password'/>
        <button onClick={auth}>submit</button>
        </div>
        <div className="">
        <h2 className="title">Sign Up</h2>
        <p>username</p>
        <input type="text"/>
        <p>password</p>
        <input type="text" />
        <button>submit</button>
        </div>
        </article>

      <Link to="" exact>
      <button>back</button>
      </Link>
      </section>
    </div>
  );
}

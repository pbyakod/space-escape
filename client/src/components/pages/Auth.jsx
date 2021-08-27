// import { useState, useEffect } from "react"
// import ContainerSmall from "./ContainerSmall"
import { Link } from "react-router-dom"
import "../../styling/auth.scss"
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
      	<div className="container">
        	<div className="container-wrapper">
          		<div className="card-background">
            		<div className="card-items">
              		<h2 className="title">Sign In</h2><br></br>
            	</div>
            	<div className="card-items">
              		<p>Username</p>
              		<input type="text" id='username' placeholder="Enter Username"/>
            	</div>
            	<div className="card-items">
                	<p>Password</p>
                	<input type="text" id='password' placeholder="Enter Password"/>
            	</div>
            	<div className="card-items">
              		<button class="authBtn" onClick={auth}>submit</button>
            	</div>
            	<div className="card-items">
              		<Link to="" exact>
                		<button class="authBtn">back</button>
              		</Link>
            	</div>
          	</div>
          		<div className="card-background">
            		<div className="card-items">
              			<h2 className="title">Sign Up</h2><br></br>
            		</div>
            		<div className="card-items">
              			<p>Username</p>
              			<input type="text" id='username' placeholder="Create Username"/>
            		</div>
            		<div className="card-items">
                		<p>Password</p>
              			<input type="text" id='password' placeholder="Create Username"/>
            		</div>
            		<div className="card-items">
              			<button class="authBtn" onClick={auth}>submit</button>
            		</div>
            		<div className="card-items">
              			<Link to="" exact>
                			<button class="authBtn">back</button>
              			</Link>
            		</div>
          		</div>
        	</div>
    	</div>
    </div>
  );
}

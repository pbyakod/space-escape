import { useState } from "react"
// import ContainerSmall from "./ContainerSmall"
import { Link } from "react-router-dom"
import "../auth/auth.scss"
import api from "../../../utils/api"
import sound from "../../../utils/sound";

export default function Auth({setAuth}) {
  //e.target to handle form
      //client side check username and password
      //conditional get or put request
      //provide response
      //redirect

  function Input() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return {
      username,
      setUsername,
      password,
      setPassword
      }
  }

  const login = Input();
  const signUp = Input();

  function getInputMethod(input, name) {
    if (name === 'username') return input.setUsername;
    else if (name === 'password') return input.setPassword;
    else if (name === 'submit') return input;  
  }
  function getInputHandler(e) {
    const {name, dataset} = e.target;
    
    switch(dataset.type){
      case 'login':
        return getInputMethod(login, name);        
      case 'signUp':
        return getInputMethod(signUp, name); 
      default:
        console.log('error');
        break;
    }
  }

  function handleChange(e) {
    const inputHandler = getInputHandler(e);
    inputHandler(e.target.value);
  }

  async function handleSubmit(e) {
    const { dataset } = e.target;
    const inputHandler = getInputHandler(e);
    const body = {username: inputHandler.username, password: inputHandler.password};

    if (dataset.type === 'login') {
      await api.login(body);
    } else {
      await api.signUp(body);
    }
    document.location.replace('/');
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
              <input 
                type="text" 
                data-type='login'
                name='username' 
                placeholder='Enter Username'
                onChange={handleChange}
                value={login.username}
              />
            </div>
            <div className="auth-item">
              <p>password</p>
              <input 
                type="text" 
                data-type='login'
                name='password' 
                placeholder='Enter Password'
                onChange={handleChange}
                value={login.password}
              />
            </div>
            <div className="auth-item">
              <button 
                className="submit-btn" 
                name='submit' 
                data-type='login' 
                onClick={handleSubmit}
                onMouseEnter={sound.PlayHover}
              >
                  submit
              </button>
            </div>
            <div className="auth-item">
              <Link to="" exact>
                <button className="back-btn" onMouseEnter={sound.PlayHover}>back</button>
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
              <input 
                type="text" 
                data-type='signUp'
                name='username' 
                placeholder='Create Username'
                onChange={handleChange}
                value={signUp.username}
              />
            </div>
            <div className="auth-item">
              <p>password</p>
              <input 
                type="text" 
                data-type='signUp'
                name='password' 
                placeholder='Create Password'
                onChange={handleChange}
                value={signUp.password}
              />
            </div>
            <div className="auth-item">
              <button 
                className="submit-btn" 
                name="submit"
                data-type="signUp"
                onClick={handleSubmit}
                onMouseEnter={sound.PlayHover}
              >
                  submit
              </button>
            </div>
            <div className="auth-item">
              <Link to="" exact>
                <button className="back-btn" onMouseEnter={sound.PlayHover}>back</button>
              </Link>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}

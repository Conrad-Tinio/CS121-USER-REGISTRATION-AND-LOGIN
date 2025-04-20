import React, { useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from '../context/AuthContext'
import './css/LoginPage.css'

function LoginPage() {

  const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  return (
    <div>
      <section className="login-section">
        <div className="login-container">
          <div className="login-row">
            <div className="login-column">
              <div className="login-card">
                <div className="login-card-inner">
                  <div className="login-card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="login-header">
                        <span className="login-title">Welcome Back 👋</span>
                      </div>
                      <h5 className="login-subtitle">
                        Sign into your account
                      </h5>
                      <div className="form-group">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control"
                          name='email'
                          placeholder='Email Address'
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control"
                          name='password'
                          placeholder='Password'
                        />
                      </div>

                      <div className="form-button">
                        <button
                          className="login-btn"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      
                      <p className="register-prompt">
                        Don't have an account?{" "}
                        <Link to="/register" className="register-link">
                          Register here.
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
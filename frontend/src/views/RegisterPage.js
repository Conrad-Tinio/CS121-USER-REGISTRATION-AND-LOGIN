import { useState, useContext } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from '../context/AuthContext'
import './css/RegisterPage.css'  

function RegisterPage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthday, setBirthday] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {registerUser} = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    registerUser(email, username, firstName, lastName, birthday, password, password2)
  }

  return (
    <div>
      <section className="register-section">
        <div className="register-container">
          <div className="register-row">
            <div className="register-column">
              <div className="register-card">
                <div className="register-card-inner">
                  <div className="register-card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="register-header">
                        <span className="register-title">
                          Welcome to <b>Register Page👋</b>
                        </span>
                      </div>
                      <h5 className="register-subtitle">
                        Sign Up
                      </h5>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={e => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Birthday"
                          onChange={e => setBirthday(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          onChange={e => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={e => setPassword2(e.target.value)}
                        />
                      </div>
                      <div className="form-button">
                        <button
                          className="register-btn"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <p className="login-prompt">
                        Already have an account?{" "}
                        <Link to="/login" className="login-link">
                          Login Now!
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

export default RegisterPage
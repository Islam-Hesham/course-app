import React, { useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';
import useCookies from '../../cookies';

function Login() {
  const { cookies, setCookie, getCookie } = useCookies();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Make a request to your login endpoint
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      // Assuming the server returns a token upon successful login
      setEmail("")
      setPassword("")

      console.log(response.data);
      const token = response.data.data.token;
      const user = JSON.stringify(response.data.data.user);
      // Store the token in local storage
      // localStorage.setItem('token', token);
      setCookie("token", token, 1);
      setCookie("user", user, 1);

      // localStorage.setItem('user', user);
      // Redirect to home page
      navigate('/');
    } catch (err) {
      console.error('Registration failed:', err.response.data.status_code);
      if(err.response.data.status_code == 400){
        setError(err.response.data.message);

      } else{
        toast.error("حدثت مشكلة من فضلك حاول مرة أخري");
      }
      // If there's an error, display it to the user
    }
  };

  return (
    <div>
      <div className="body-box w-100 h-100">
        <div className="container" id="registration-form">
          <div className="frm d-flex justify-content-center align-items-start flex-column ">
            <h2 className="my-3">تسجيل الدخول:</h2>

            <div className="form-group w-100">
              <label htmlFor="email">البريد الالكتروني:</label>
              <input
                type="email"
                className="form-control w-100"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group w-100">
              <label htmlFor="pwd">کلمه المرور:</label>
              <input
                type="password"
                className="form-control w-100"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <div className="form-group ">
              <button
                type="button"
                className="btn card-btn btn-lg"
                onClick={handleLogin}
              >
                تسجيل الدخول
              </button>
            </div>

            <div className="flex flex-wrap flex-row text-center mt-2">
              <span>لا يوجد لديك حساب؟</span>
              <Link to="/register">
                <span className="text-lime-600 dark:text-lime-600 saturate-50">
                  انشئ حسابك الآن !
                </span>
              </Link>
            </div>
          </div>
          <div className="image "></div>
        </div>
      </div>
    </div>
  );
}

export default Login;

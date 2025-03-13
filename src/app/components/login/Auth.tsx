"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Auth() {
    const [loginForm, setLoginForm] = useState({
        email : "",
        password : ""
    });
    const [error, setError] = useState("");

    const loginValidation = () => {
        if(loginForm.email === '' || loginForm.password === '') {
            setError("Please fill in all fields");
            return false;
        }
        return true;
    }

    const login = async () => {
        if(loginValidation()){
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginForm)
                })
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                }
                else {
                    setError('Incorrect email or password');
                }
            } catch (error) {
                console.error('An error occurred', error);
                setError('An error occurred');
            }
        }
    }

    return (
        <div>
            <Link href="/home">Home</Link>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Email address</label>
                <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} />
                <label>Password</label>
                <input type ="password" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} />
                <input type="checkbox"></input>
                <label>Remember me</label>

                <Link href="/forgotpassword">Forgot password?</Link>
                <button>Sign In </button>

                <p>Or continue with</p>

                <button>Facebook</button>
                <button>Google</button>
                <button>Github</button>
                
                <p>Don't have an account? <Link href="/signup">Join now</Link></p>

            </form>
        </div>
    )
}
"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./Auth.module.css";

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
        <div className={styles.authContainer}>
            <Link href="/" className="text-blue-600 mb-6">
                <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Home
                </span>
            </Link>
            
            <div className={styles.authForm}>
                <h1 className={styles.formTitle}>Log in</h1>
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    login();
                }}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email address</label>
                        <input 
                            type="email"
                            className={styles.formControl}
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                            placeholder="your@email.com"
                        />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Password</label>
                        <input 
                            type="password"
                            className={styles.formControl}
                            value={loginForm.password}
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                            placeholder="••••••••"
                        />
                    </div>
                    
                    <div className={styles.formOptions}>
                        <div className={styles.rememberMe}>
                            <input type="checkbox" id="remember" className={styles.checkbox} />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link href="/forgotpassword" className="text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                        Sign In
                    </button>
                    
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    
                    <div className={styles.divider}>
                        <div className={styles.dividerLine}></div>
                        <span className={styles.dividerText}>Or continue with</span>
                        <div className={styles.dividerLine}></div>
                    </div>
                    
                    <div className={styles.socialBtns}>
                        <button type="button" className={`${styles.socialBtn} ${styles.facebook}`}>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                            Facebook
                        </button>
                        <button type="button" className={`${styles.socialBtn} ${styles.google}`}>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button type="button" className={`${styles.socialBtn} ${styles.twitter}`}>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            Twitter
                        </button>
                        <button type="button" className={`${styles.socialBtn} ${styles.github}`}>
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </button>
                    </div>
                    
                    <p className={styles.signupLink}>
                        Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline font-medium">Join now</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
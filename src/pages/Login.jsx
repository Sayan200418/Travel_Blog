import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // import Link

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }
    return (
        <>
        
        </>
    )

}

export default Login;

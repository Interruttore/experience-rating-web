import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <h2>Login</h2>
                <label htmlFor="username">Username or email:</label>
                <input type="text" name="username"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"></input>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login

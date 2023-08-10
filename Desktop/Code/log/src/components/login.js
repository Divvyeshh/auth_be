import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'


function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notification, setNotification] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleLogin = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            setEmail('')
            setPassword('')
            setNotification('Login Success, redirecting to home page')
            setRedirect(true)
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <div>
            <h2>Login</h2>
            <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}>
            </input>
            <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}>
            </input>
            <button onClick={handleLogin}>Register</button>
            {notification && <p>{notification}</p>}
            {redirect && window.setTimeout(() => {
                window.location.href = '/home'
            }, 2000)}
        </div>
    )
}

export default Register;
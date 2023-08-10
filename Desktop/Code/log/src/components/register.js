import React, {useState} from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'


function Register(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [notification, setNotification] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [gredirect, setGredirect] = useState(false)
    const auth = getAuth();
    const provider = new GoogleAuthProvider()

    const handleGoogle = async () => {
        
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken;
            const user = result.user;
            setGredirect(true)
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    }

    const handleRegister = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            setEmail('')
            setPassword('')
            setNotification('Registration Success, redirecting to login page')
            setRedirect(true)
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <div>
            <h2>Register</h2>
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
            <button onClick={handleRegister}>Register</button>
            {notification && <p>{notification}</p>}
            {redirect && window.setTimeout(() => {
                window.location.href = '/login'
            }, 1000)}
            <button onClick={handleGoogle}>Register with Google</button>
            {gredirect && window.setTimeout(() => {
                window.location.href = '/home'
            }, 1000)}
            
        </div>
    )
}

export default Register;
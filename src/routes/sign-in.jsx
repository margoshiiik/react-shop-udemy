import {signInWithGooglePoput, createUserDocumentFromAuth } from '../utils/firebase' 

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePoput(); 
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>This is Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;
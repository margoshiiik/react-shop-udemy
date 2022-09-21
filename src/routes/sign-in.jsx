import {signInWithGooglePoput, createUserDocumentFromAuth } from '../utils/firebase' 
import SignUp from '../components/sign-up';
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
            <SignUp />
        </div>
    )
}

export default SignIn;
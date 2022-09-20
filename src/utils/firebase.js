import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { 
  getFirestore, 
  doc, 
  getDoc, setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-rT3GauiD-oPj5vhiDDba6pxHQ9UQgM8",
  authDomain: "crown-clothing-db-18a29.firebaseapp.com",
  projectId: "crown-clothing-db-18a29",
  storageBucket: "crown-clothing-db-18a29.appspot.com",
  messagingSenderId: "256826850898",
  appId: "1:256826850898:web:f753d5414795248f3ce98b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider= new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePoput = () => signInWithPopup(auth, provider)

export const db = getFirestore(); 

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef); 
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth; 
    const createdAt = new Date(); 

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch(error) {

      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;


}

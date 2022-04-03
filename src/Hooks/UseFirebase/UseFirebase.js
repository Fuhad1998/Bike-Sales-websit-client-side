import { useState, useEffect } from "react";
import initializeFirebase from "../../Components/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false)

  const auth = getAuth();

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        setUser(email, name)

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unsubscribe;
  }, []);

  useEffect(() =>{
    fetch(`https://boiling-falls-05013.herokuapp.com/users/${user.email}`)
    .then(res =>res.json())
    .then(data => setAdmin(data.admin))

  }, [user.email])

  // log out

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const saveUser = (email, displayName) =>{
    const user = {email, displayName};
    fetch('https://boiling-falls-05013.herokuapp.com/users', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()

  }

  return {
    user,
    admin,
    registerUser,
    loginUser,
    logOut,
  };
};
export default useFirebase;

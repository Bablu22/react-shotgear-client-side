import { useEffect, useState } from "react"
import initializeAuthentication from "../componants/Authentication/FIrebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLooding, setIsLooding] = useState(true)
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const registeruser = (email, password, name, location, navigate) => {
        setIsLooding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError('')

                // save user in databse
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
            })
            .catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLooding(false))
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLooding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLooding(false))

    }
    const googleLogIn = (location, navigate) => {
        setIsLooding(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/home'
                navigate(destination)
                setError('')
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {

                setError(error.message)

            })
            .finally(() => setIsLooding(false))

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLooding(false)
        });
    }, [auth])

    const logOut = () => {
        setIsLooding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLooding(false))
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    return {
        user,
        registeruser,
        logOut,
        loginUser,
        isLooding,
        error,
        googleLogIn,
        admin,
    }


}

export default useFirebase

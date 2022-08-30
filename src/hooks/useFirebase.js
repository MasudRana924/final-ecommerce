import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,sendPasswordResetEmail, confirmPasswordReset,signOut, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from './firebase.init';
import { addToDb, getStoredCart } from './fakeDb';
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)
    // for name
    const [name, setName] = useState('')
    // for email
    const [email, setEmail] = useState('')
    // for pass 
    const [pass, setPass] = useState('')
    // pass 6 er kom hoile tar jonno state 
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    // email handle
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    // pass handle
    const handlePass = e => {
        setPass(e.target.value)
    }
    // handle name
    const handleName = event => {
        setName(event.target.value)
    }
    // name 
    const setUserName = () => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(result => {
            // Profile updated!
            // ...
        })
            .finally(() =>
                setLoading(false)
            )
    }
    const auth = getAuth();
    //  register er jonno user create 
    const registerUser = (email, pass) => {
        setLoading(true)
        if (pass.length < 6) {
            setError('pass must be 6 character')
            return
        }
        return createUserWithEmailAndPassword(auth, email, pass)
    }
   
    //  for signin 
    const logInUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const forgotPassword=(email)=> {
        return sendPasswordResetEmail(auth, email, {
          url: `http://localhost:3000/login`,
        })
      }
      const resetPassword=(oobCode, newPassword)=> {
        return confirmPasswordReset(auth, oobCode, newPassword)
      }
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)
        });
        return unsubscribed
    }, [])
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => {
                setLoading(false)
            });;
    }
    

    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        // fetch('./products.json')
        fetch('https://fierce-wildwood-12311.herokuapp.com/glasses')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
                
            })
    }, [])
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const _id in storedCart){
            const addedProduct = products.find(product => product._id === _id);
            if(addedProduct){
                const quantity = storedCart[_id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
        console.log(selectedProduct)
    }
   
    return {
        setError, error, handleEmail, handlePass, handleName, setUserName, email, pass, setUser, name , registerUser, logInUser,forgotPassword,resetPassword,user,logOut,products,displayProducts,setDisplayProducts,cart,setCart,handleAddToCart,
    }
};

export default useFirebase;
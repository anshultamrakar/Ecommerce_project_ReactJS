
import { useContext } from "react"
import DataContext from './Context/DataContext'
import { auth } from "./firebase";

const Login = () => {
    const { login } = useContext(DataContext) 

  const SignUpWithCredentials = () => {

    console.log("Under SignUP")
    auth.createUserWithEmailAndPassword("tamrakardivyansh189@gmail.com", "Developer@324")
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    });
  
  }
    return(
        <div>
        <button onClick={()=>SignUpWithCredentials()}>
            SigUp
        </button>
        </div>
    )
}

export default Login

import { useContext } from "react"
import DataContext from './Context/DataContext'

const Login = () => {
    const { login } = useContext(DataContext) 

  
    return(
        <div>
        <h1> Chaabi laya kya </h1>
        </div>
    )
}

export default Login
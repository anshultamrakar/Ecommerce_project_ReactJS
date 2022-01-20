import { useContext } from "react"
import {DataContext} from './Context/DataContext'



const Header = ({title}) => {
    return (
        <header className="Header">
            <h1> {title}</h1>
        </header>
    )
}

export default Header

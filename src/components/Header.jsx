import ArgentBankLogo from "../assets/Images/argentBankLogo.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const connected = useSelector(selectUserLogin)
    const firstName = useSelector(selectFirstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let manageLogOut = () => {
        dispatch(logOut())
        navigate("/")
    }

    return(
        <nav className="main-nav">
            <Link to="/">
                <img src={ArgentBankLogo} alt='Logo Argent Bank' className='main-nav-logo'></img>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {connected 
                ?
                <div className='logged-container'>
                    <FontAwesomeIcon icon={ faUserCircle } className="icon-sign"/>  
                    <Link className='main-nav-item' to={"/user"}>{firstName}</Link>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon"/>
                    <p className='main-nav-item' onClick={manageLogOut}>Sign out</p> 
                </div>
                
                : 
                
                <div className='logged-container'>
                    <FontAwesomeIcon icon={ faUserCircle } className="icon-sign"/> 
                    <Link className="main-nav-item" to={"/sign-in"}>
                        Sign In
                    </Link>
                </div>
            }
        </nav>
    );
}

export default Header;
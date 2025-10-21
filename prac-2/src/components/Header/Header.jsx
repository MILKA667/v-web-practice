import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
        <nav>
            <ul>
                <li className="nav_left">
                    <Link to="/">
                        <button>
                            <img src="/home.svg" alt="Home" width="24" height="24" />
                        </button>
                    </Link>
                </li>
                <li className="nav_center">
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Поиск..." 
                    />
                </li>
                <li className="nav_right">
                    <Link to="/liked">
                        <button>
                            <img src="/heart.svg" alt="Favorites" width="24" height="24" />
                        </button>
                    </Link>
                </li>
                <li className="nav_right">
                    <Link to="/cart">
                        <button>
                            <img src="/cart.svg" alt="Cart" width="24" height="24" />
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
        
    )
}


import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {  
    return (
        <header>
            <div className='MarvelLogo'>
                <Link to="/">MARVEL</Link>
                {/* <a href="/">MARVEL</a> */}
            </div>
            
            <div className="Search">
                <input type='text' placeholder='Search ...'/>
                <button>Search</button>
            </div>
        </header>
    )
}

export default Header

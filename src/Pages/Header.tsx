import { Outlet } from 'react-router-dom'
import '../styles/Header.css'

function Header() {  
    return (
        <header>
            <div className='MarvelLogo'>
                <div className='MarvelLogo_place_for_text'>
                    <a className='MarvelLogo_text' href="/">MARVEL</a>
                </div>
                <div className='MarvelLogo_place_for_links'>
                    <div className='MarvelLogo_links'>
                        <a className='MarvelLogo_link_character' href="/Characters">Characters</a>
                        <a className='MarvelLogo_link_comics' href="/Comics">Comics</a>
                        <Outlet />
                    </div>
                </div>
            </div>
            
            <div className="Search">
                <input type='text' placeholder='Search ...'/>
                <button>Search</button>
            </div>
        </header>
    )
}

export default Header

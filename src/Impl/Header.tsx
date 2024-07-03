import '../styles/Header.css'

function Header() {  
    return (
        <header>
            <div className='MarvelLogo'>
                <a>MARVEL</a>
            </div>
            
            <div className="Search">
                <input type='text' placeholder='Search ...'/>
                <button>Search</button>
            </div>
        </header>
    )
}

export default Header

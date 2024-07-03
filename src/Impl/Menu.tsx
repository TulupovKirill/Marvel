import { Link } from "react-router-dom"
import './../styles/Menu.css'

function Menu() {  
    return (
        <main>
            <div className="menu_text">
                <h1>Marvel Characters and Comics</h1>
            </div>
            
            <div className="menu">
                <div className="card_menu">
                    <div className="card_menu_img_character">
                        <img src="src/data/image/CharactersMarvel.png"/>
                    </div>
                </div>
                <div className="card_menu">
                    <div className="card_menu_img_comics">
                        <img src="src/data/image/ComicsMarvel.png"/>
                    </div>
                </div>
            </div>


            <div className="menu">
                <div className="card_menu">
                    
                    <div className="card_menu_describtion">
                        <h2>Everything about Characters from the Marvel Universe</h2>
                    </div>
                </div>
                <div className="card_menu">
                    <div className="card_menu_describtion">
                        <h2>Everything about Comics from the Marvel Universe</h2>
                    </div>
                </div>
            </div>

            <div className="menu">
                <div className="card_menu">
                    <nav className="card_menu_nav_button">
                        <button>
                            <Link to="/characters" className="card_menu_nav_button_text">Go to Characters</Link>
                            {/* <a href="/characters" className="card_menu_nav_button_text">Go to Characters</a> */}
                        </button>
                    </nav>
                </div>
                <div className="card_menu">
                    <nav className="card_menu_nav_button">
                        <button>
                            <Link to="/comics" className="card_menu_nav_button_text">Go to Comics</Link>
                            {/* <a href="/comics" className="card_menu_nav_button_text">Go to Comics</a> */}
                        </button>
                    </nav>
                </div>
            </div>
        </main>
    )
}

export default Menu

import './../styles/Menu.css'

function Menu() {  
    return (
        <main>
            <h1 className='menu_text'>Marvel Characters and Comics</h1>
            <div className="cards_menu">
                <img className='card_menu_characters' src="src/data/image/CharactersMarvel.png" height="100%" width="40%"/>
                <img className='card_menu_comics' src="src/data/image/ComicsMarvel.png" height="100%" width="40%"/>
            </div>
            <div className="cards_menu">
                <a className='card_menu_characters_link' href="/characters">Characters the Marvel Universe</a>
                <a className="card_menu_comics_link"href="/comics">Comics the Marvel Universe</a>
            </div>
        </main>
    )
}

export default Menu

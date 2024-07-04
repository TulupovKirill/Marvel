import '../../styles/Characters.css'
import image_iron_man from '/src/data/image/iron_man.png'
import image_hulk from '/src/data/image/hulk.png'
import image_spider_man from '/src/data/image/spider_man.png'

function Screen_Characters()
{
    return (
        <main>
            <h1 className='h1_characters'>Characters Marvel</h1>
            <div className='cards_characters'>
                <div className='card_of_character'>
                    <img className='card_img' src={image_iron_man} width="320px" height="370px"/>
                    <a className='card_text' href="/characters/2">Iron Man</a>
                </div>
                <div className='card_of_character'>
                    <img className='card_img' src={image_hulk}width="320px" height="370px"/>
                    <a className='card_text' href="/characters/1">Hulk</a>
                </div>
                <div className='card_of_character'>
                    <img className='card_img' src={image_spider_man} width="320px" height="370px"/>
                    <a className='card_text' href="/characters/3">Spider Man</a>
                </div>
            </div>
        </main>
    )
}

export default Screen_Characters

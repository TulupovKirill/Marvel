import '../../styles/Characters.css'
import image_iron_man from '/src/data/image/iron_man.png'
import image_hulk from '/src/data/image/hulk.png'
import image_spider_man from '/src/data/image/spider_man.png'

function Screen_Characters()
{
    return (
        <main>
            <h1 className='h1_characters'>Characters Marvel</h1>
            <div className='character_images'>
                <img className='card_img' src={image_iron_man} width="350px" height="450px"/>
                <img className='card_img' src={image_hulk}width="350px" height="450px"/>
                <img className='card_img' src={image_spider_man} width="350px" height="450px"/>
            </div>
            <div className='character_texts'>
                <a className='card_text_1' href="/characters/2">Iron Man</a>
                <a className='card_text_2' href="/characters/1">Hulk</a>
                <a className='card_text_3' href="/characters/3">Spider Man</a>
            </div>
        </main>
    )
}

export default Screen_Characters

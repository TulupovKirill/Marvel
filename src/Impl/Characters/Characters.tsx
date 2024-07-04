import { Link } from 'react-router-dom'
import '../../styles/Cards.css'
import image_iron_man from '/src/data/image/iron_man.png'
import image_hulk from '/src/data/image/hulk.png'
import image_spider_man from '/src/data/image/spider_man.png'

function Screen_Characters()
{
    return (
        <main>
            <h1>Characters Marvel</h1>
            <div className='cards'>
                <div className='card'>
                    <div className='card_img'>
                        <img src={image_iron_man} width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/characters/2">Iron Man</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src={image_hulk}width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/characters/1">Hulk</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src={image_spider_man} width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/characters/3">Spider Man</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Screen_Characters

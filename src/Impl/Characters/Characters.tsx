import { Link } from 'react-router-dom'
import '../../styles/Cards.css'

function Screen_Characters()
{
    return (
        <main>
            <h1>Characters Marvel</h1>
            <div className='cards'>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/iron_man.png' width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/characters/2">Iron Man</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/hulk.png' width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/characters/1">Hulk</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/spider_man.png' width="320px" height="370px"/>
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

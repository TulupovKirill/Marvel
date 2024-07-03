import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'

function Screen_Comics()
{
    return (
        <main>
            <h1>Comics Marvel</h1>
            <div className='cards'>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/Essential_Iron_Man_Vol_1.jpg' width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/comics/1">Essential Iron Man, Vol. 1</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/HulkAngry.jpg' width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/comics/2">Hulk. Angry</Link>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_img'>
                        <img src='src/data/image/Modern_Spider_Man.jpg' width="320px" height="370px"/>
                    </div>
                    <div className='card_text'>
                        <Link to="/comics/3">Modern Spider Man</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Screen_Comics

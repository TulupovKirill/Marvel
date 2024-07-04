import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'
import image_spider_man from '/src/data/image/spider_man.png'

function Character_SpiderMan ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Spider Man</h1>
                    <img src={image_spider_man} width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Product</h2>
                        <Link to="/comics/3">Modern Spider Man</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Character_SpiderMan
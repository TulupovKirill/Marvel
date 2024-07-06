import { Link } from 'react-router-dom'
import './../../styles/Comics/ModernSpiderMan.css'
import image_comics_Modern_Spider_Man from '/src/data/image/Modern_Spider_Man.jpg' 

function Comics_ModernSpiderMan ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Modern Spider Man</h1>
                    <img src={image_comics_Modern_Spider_Man} width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Characters</h2>
                        <Link to="/characters/3">Spider Man</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Comics_ModernSpiderMan
import { Link } from 'react-router-dom'
import './../../styles/Comics/EssentialIronManVol1.css'
import image_comics_Essential_Iron_Man_Vol_1 from '/src/data/image/Essential_Iron_Man_Vol_1.jpg'

function Comics_EssentialIronManVol1 ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Essential Iron Man, Vol. 1</h1>
                    <img src={image_comics_Essential_Iron_Man_Vol_1} width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Characters</h2>
                        <Link to="/characters/2">Iron Man</Link>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Comics_EssentialIronManVol1
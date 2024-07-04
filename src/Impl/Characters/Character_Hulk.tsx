import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'

function Character_Hulk ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Hulk</h1>
                    <img src='src/data/image/hulk.png' width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Product</h2>
                        <Link to="/comics/2">Hulk. Angry</Link>
                        {/* <a href="/comics/2">Hulk. Angry</a> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Character_Hulk
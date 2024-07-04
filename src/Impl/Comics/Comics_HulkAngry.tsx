import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'

function Comics_HulkAngry ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Hulk. Angry</h1>
                    <img src='src/data/image/HulkAngry.jpg' width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Characters</h2>
                        <Link to="/characters/1">Hulk</Link>
                        {/* <a href="/characters/1">Hulk</a> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Comics_HulkAngry
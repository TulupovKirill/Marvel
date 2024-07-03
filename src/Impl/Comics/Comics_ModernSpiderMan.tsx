// import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'

function Comics_ModernSpiderMan ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Modern Spider Man</h1>
                    <img src='src/data/image/Modern_Spider_Man.jpg' width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Enithing...</p>
                    </div>
                    <div className="links">
                        <h2>List Characters</h2>
                        {/* <Link to="/characters/3">Spider Man</Link> */}
                        <a href="/characters/3">Spider Man</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Comics_ModernSpiderMan
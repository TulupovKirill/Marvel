import { Link } from 'react-router-dom'
import './../../styles/Describtion.css'

function Character_IronMan ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Iron Man</h1>
                    <img src='src/data/image/iron_man.png' width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Enithing...</p>
                    </div>
                    <div className="links">
                        <h2>List Product</h2>
                        <Link to="/comics/1">Essential Iron Man, Vol. 1</Link>
                        {/* <a href="/comics/1">Essential Iron Man, Vol. 1</a> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Character_IronMan
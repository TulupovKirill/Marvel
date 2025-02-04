import './../../styles/Characters/Iron_Man.css'
import image_iron_man from '/src/data/image/iron_man.png'

function Character_IronMan ()
{
    return(
        <main>
            <div className="between">
                <div className="title">
                    <h1>Iron Man</h1>
                    <img src={image_iron_man} width="400px" height="550px"/>
                </div>
                <div className="title">
                    <div className="describ">
                        <h2>Describtion</h2>
                        <p>Anything...</p>
                    </div>
                    <div className="links">
                        <h2>List Product</h2>
                        <a href="/comics/1">Essential Iron Man, Vol. 1</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Character_IronMan
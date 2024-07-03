import Header from "./Header"
import Footer from "./Footer"
import './../styles/CharacterIronMan.css'

function CharacterIronMan ()
{
    return(
        <>
            <Header/>
            <main>
                <div className="cards">
                    <div className="title">
                        <h1>Essential Iron Man, Vol. 1</h1>
                        <img src='src/data/image/Essential_Iron_Man_Vol_1.jpg' width="400px" height="550px"/>
                    </div>

                    <div className="title">
                        <div className="describ">
                            <h2>Describtion</h2>
                            <p>Enithing...</p>
                        </div>

                        <div className="links">
                            <h2>List Characters</h2>
                            <a href="#">Iron Man</a>
                        </div>
                        
                    </div>
                </div>
                
                
            </main>
            <Footer/>
        </>
    )
}

export default CharacterIronMan
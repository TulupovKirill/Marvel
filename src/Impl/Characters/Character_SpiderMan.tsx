import './../../styles/Describtion.css'

function Character_SpiderMan ()
{
    return(
        <>
            <main>
                <div className="between">
                    <div className="title">
                        <h1>Spider Man</h1>
                        <img src='src/data/image/spider_man.png' width="400px" height="550px"/>
                    </div>

                    <div className="title">
                        <div className="describ">
                            <h2>Describtion</h2>
                            <p>Enithing...</p>
                        </div>

                        <div className="links">
                            <h2>List Product</h2>
                            <a href="#">Modern Spider Man</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Character_SpiderMan
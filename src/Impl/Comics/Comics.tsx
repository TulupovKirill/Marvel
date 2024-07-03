import '../../styles/Main.css'

function ScreenComics()
{
    return (
        <>
            <main>
                <h1>Comics Marvel</h1>
                <div className='cards'>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/Essential_Iron_Man_Vol_1.jpg' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Essential Iron Man, Vol. 1</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/HulkAngry.jpg' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Hulk. Angry</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/Modern_Spider_Man.jpg' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Modern Spider Man</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ScreenComics

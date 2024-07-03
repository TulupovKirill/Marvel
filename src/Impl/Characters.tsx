import '../styles/Main.css'

function Screen_Characters()
{
    return (
        <>
            <main>
                <h1>Characters Marvel</h1>
                <div className='cards'>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/iron_man.png' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Iron Man</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/hulk.png' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Hulk</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card_img'>
                            <img src='src/data/image/spider_man.png' width="320px" height="370px"/>
                        </div>
                        <div className='card_text'>
                            <a href="#">Spider Man</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Screen_Characters

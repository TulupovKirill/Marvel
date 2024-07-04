import './../../styles/Comics.css'
import image_comics_Essential_Iron_Man_Vol_1 from '/src/data/image/Essential_Iron_Man_Vol_1.jpg'
import image_comics_HulkAngry from '/src/data/image/HulkAngry.jpg'
import image_comics_Modern_Spider_Man from '/src/data/image/Modern_Spider_Man.jpg' 


function Screen_Comics()
{
    return (
        <main>
            <h1 className='screen_comics_h1'>Comics Marvel</h1>
            <div className='comics_images'>
                <img className='comics_images_1' src={image_comics_Essential_Iron_Man_Vol_1} width="320px" height="370px"/>
                <img className='comics_images_2' src={image_comics_HulkAngry} width="320px" height="370px"/>
                <img className='comics_images_3' src={image_comics_Modern_Spider_Man} width="320px" height="370px"/>
            </div>
            <div className='comics_text'>
                <a className='comics_text_1' href="/comics/1">Essential Iron Man, Vol. 1</a>
                <a className='comics_text_2' href="/comics/2">Hulk. Angry</a>
                <a className='comics_text_3' href="/comics/3">Modern Spider Man</a>
            </div>
        </main>
    )
}

export default Screen_Comics

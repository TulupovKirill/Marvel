import Header from './Impl/Header.tsx'
import Footer from './Impl/Footer.tsx'
import Screen_Characters from './Impl/Characters.tsx'
import Screen_Comics from './Impl/Comics.tsx'
import Comics_EssentialIronManVol1 from './Impl/Comics/Comics_EssentialIronManVol1.tsx'
import Comics_HulkAngry from './Impl/Comics/Comics_HulkAngry.tsx'
import Comics_ModernSpiderMan from './Impl/Comics/Comics_ModernSpiderMan.tsx'
import Character_IronMan from './Impl/Characters/Character_IronMan.tsx'
import Character_Hulk from './Impl/Characters/Character_Hulk.tsx'
import Character_SpiderMan from './Impl/Characters/Character_SpiderMan.tsx'


function App() {

  return (
    <>
      <Header/>
      <Character_SpiderMan/>
      <Footer/>
    </>
  )
}

export default App

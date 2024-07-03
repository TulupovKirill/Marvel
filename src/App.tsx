import './styles/Main.css'
import Header from './Impl/Header.tsx'
import Footer from './Impl/Footer.tsx'
// import Screen_Characters from './Impl/Characters.tsx'
import Screen_Comics from './Impl/Comics.tsx'

function App() {

  return (
    <>
      <Header/>
      <Screen_Comics/>
      <Footer/>
    </>
  )
}

export default App

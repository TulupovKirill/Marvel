import '../styles/Footer.css'

function Footer() {

    var currentYear = new Date().getFullYear();
  
    return (
        <>
            <footer>
                <h2>Data provided by Marvel. {currentYear} ©MARVEL</h2>
                <a href="developer.marvel.com">developer.marvel.com</a>
            </footer>
        </>
    )
}

export default Footer

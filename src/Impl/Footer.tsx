import '../styles/Footer.css'

function Footer() {

    var currentYear = new Date().getFullYear();
  
    return (
        <footer>
            <h3>Data provided by Marvel. {currentYear} ©MARVEL</h3>
            <a href="developer.marvel.com">developer.marvel.com</a>
        </footer>
    )
}

export default Footer

import { Link } from 'react-router-dom';
import '../styles/Footer.css'

function Footer() {

    var currentYear = new Date().getFullYear();
  
    return (
        <footer>
            <h3>Data provided by Marvel. {currentYear} ©MARVEL</h3>
            <Link to="/">developer.marvel.com</Link>
            {/* <a href="/">developer.marvel.com</a> */}
        </footer>
    )
}

export default Footer

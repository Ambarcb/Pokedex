
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import ItemsPic from '../../assets/pokeball.png';
import PikachuPic from '../../assets/pikachu.png';
import LocationPic from '../../assets/pointer.png';

const Footer = () => {
    return  <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={PikachuPic} alt="Pokeball" />
            Pokemons
        </Link>
        <Link className={styles.footerLink} to="/">
            <img className={styles.footerIcon} src={ItemsPic}  alt="Pokeball" />
            Items (Unavailable)
        </Link>
        <Link className={styles.footerLink} to="/">
            <img className={styles.footerIcon} src={LocationPic}  alt="Pokeball" />
            Map (Unavailable)
        </Link>
       </footer>
    ;
}

export default Footer; 
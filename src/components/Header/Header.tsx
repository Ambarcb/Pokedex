import styles from './header.module.css';

type HeaderProps = {
    query: string; 
    setQuery: (query: string) => void; 
};

const Header = ({query, setQuery}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg'/>
            <input 
                className={styles.input} 
                placeholder='Look for a Pokemon' 
                type='text'
                value={query}
                onChange={(event) => setQuery(event.target.value)}/>
        </header>
    );
   
};

export default Header; 
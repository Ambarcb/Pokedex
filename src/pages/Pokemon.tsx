import { waitFor } from '../utils/utils';
import {useState, useEffect} from 'react'; 
import styles from '../pages/pokemon.module.css';
import { PokemonDetails } from '../types/types';
import Footer from '../components/Footer/Footer';
import { fetchPokemon } from '../api/fetchPokemon';
import PokeballImage from "../assets/pokeball.png";
import { useParams, useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon(){
            setIsLoading(true);
            await waitFor(500);
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon); 
            setIsLoading(false);
        }
        getPokemon();
    }, [name])

    if (isLoading || !pokemon) return <LoadingScreen/>

    return <>
        <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
            <img className={styles.pokeballImage} src={PokeballImage} alt="Pokeball"/> Go back
        </button>
        <div className={styles.pokemon}>
            <main className={styles.pokemonInfo}>
                <div className={styles.pokemonTitle}>{pokemon?.name.toUpperCase()}</div>
                <div><b>No.</b> {pokemon?.id}</div>
                <div>
                    <img className={styles.pokemonInfoImage} src={pokemon?.imgSrc} alt={pokemon?.name}/>
                </div>
                <div><b>HP:</b> {pokemon?.hp}</div>
                <div><b>Attack:</b> {pokemon?.attack}</div>
                <div><b>Defense: </b>{pokemon?.defense}</div>
            </main>
        </div>
        <Footer />
    </>
};

export default Pokemon; 
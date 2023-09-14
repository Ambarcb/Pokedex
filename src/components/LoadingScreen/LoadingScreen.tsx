import React from 'react'; 
import Pokedex from '../../assets/pokedex.png';
import styles from '../LoadingScreen/loadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen}>
           <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex"/>
        </div>
    );
};

export default LoadingScreen; 
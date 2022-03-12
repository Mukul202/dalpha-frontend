import styles from '../styles/Home.module.css'
import React from 'react';

export default function SearchInput() {
    let theInput = React.createRef();
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(theInput.current.value);
            theInput.current.value = ""
        }
    }
    return (
        <form className={ styles.form}>
        <img src="/searchLogo.svg" className={ styles.searchLogo}/>
        <input type="text" ref={ theInput} onKeyPress={handleKeyPress} className={styles.input} placeholder='Search Company Name'></input>
    </form>
  )
}

import { useState } from 'react';
import styles from './styles.module.css'

export default function Count() {
    const [num, setNum] = useState(0);
    const [message, setMessage] = useState('');

    const add = () => {
        if (num < 10) {
            setNum(num + 1);
            setMessage('');
        } else (setMessage('O contador atingiu seu valor máximo.'))
    };

    const sub = () => {
        if (num > 0) {
            setNum(num - 1);
            setMessage('');
        } else (setMessage('O contador atingiu seu valor mínimo.'))
    };

    return (
        <main className={styles.main_container}>
            <p className={styles.numbers}>{num}</p>
            <p className={styles.text}>{message}</p>
            <section className={styles.button_container}>
                <button onClick={add}> + </button>
                <button onClick={sub}> - </button>
            </section>
        </main>
    );
}
import { useState } from 'react';
import styles from './styles.module.css'

export default function Count() {
    const [num, setNum] = useState(0);

    const add = () => {
        if (num < 10) {
            setNum(num + 1);
        }
    };

    const sub = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };

    return (
        <main>
            <p>{num}</p>
            <section>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
            </section>
        </main>
    );
}
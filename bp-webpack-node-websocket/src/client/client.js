import io from 'socket.io-client';
import './styles.css';

(() => {
    const socket = io();

    socket.on('init', (text) => {
        console.log(text);
    });
})();





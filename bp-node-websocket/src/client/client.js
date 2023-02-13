(() => {
    const socket = io();

    socket.on('init', (text) => {
        console.log(text);
    });
})();





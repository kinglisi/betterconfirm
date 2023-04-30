window.oldConfirm = window.confirm;

// Obviously you can change how this works easily
window.confirm = (message, yes, no) => {
    const modal = document.getElementById('myModal');
    const messageElement = document.getElementById('message');
    const okElement = document.getElementById('ok-text');
    const cancelElement = document.getElementById('cancel-text');

    if (modal && messageElement && okElement && cancelElement) {
        // From this point to "accept" it you just do resolve(true) and to deny it you do reject(false), in this case you can add any condition of your own.
        return new Promise((resolve, reject) => {
            messageElement.textContent = message;
            okElement.textContent = yes;
            cancelElement.textContent = no;

            okElement.onclick = () => {
                resolve(true);
                modal.style.display = 'none';
            }

            cancelElement.onclick = () => {
                reject(false);
                modal.style.display = 'none';
            }

            modal.style.display = 'block';

            /*
            let confirmed = oldConfirm(message);
            if (confirmed) {
                resolve(true);
            } else {
                reject(false);
            }
            */
        })
    }
    console.error('Your modal elements need fixing in setup.js');
}


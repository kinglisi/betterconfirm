const confirmationElements = document.querySelectorAll('[confirmation]');
for (let confirmationElement of confirmationElements) {
    confirmationElement.addEventListener('click', e => {
        let confMessages = confirmationElement.getAttribute('confirmation');
        if (confMessages) {
            e.preventDefault();
            e.stopPropagation();
                
            // Default options, incase they aren't given in "confirmation" attribute.
            let confirmationMessage = 'Are you sure?', yesMessage = 'Yes', noMessage = 'No';

            const configuration = confMessages.split('|');
            if (configuration.length > 1) if (configuration[0]) confirmationMessage = configuration[0];
            if (configuration.length > 2) if (configuration[1]) yesMessage = configuration[1];
            if (configuration.length > 3) if (configuration[2]) noMessage = configuration[2];

            // Use case of promise confirmation
            // Here you have an example of confirm that doesn't do anything if you "cancel"
            confirm(confirmationMessage, yesMessage, noMessage).then(() => {
                // These attributes are not required, it executes whatever javascript you have put inside execute-confirm
                const requestedMethod = confirmationElement.getAttribute('execute-confirm');
                if (requestedMethod !== null) {
                    eval(requestedMethod);
                    return;
                }

                if ('href' in confirmationElement) location.href = confirmationElement.href;
            })

            // If you wish to execute something when cancel or "no" option is hit you can "catch" confirmation by doing (FYI it takes a callback as a parameter, I'm just using anonymous functions)
            // Mind you as stated above, you do not always need to do something when cancel is hit, in which case you can just delete the 3 lines below this one.
            .catch(() => {
                // These attributes are not requirea, it executes whatever javascript you have put inside execute-cancel
                const requestedMethod = confirmationElement.getAttribute('execute-cancel');
                if (requestedMethod !== null) {
                    eval(requestedMethod);
                    return;
                }

                console.log('User canceled it');
            });
        

            return false;
        }
    });
    
}


let toi = document.getElementById('toi');
let ie = document.getElementById('ie');
let bbc = document.getElementById('bbc');
let cnbc = document.getElementById('cnbc');
let ndtv = document.getElementById('ndtv');
let it = document.getElementById('it');

toi.addEventListener('click', trigger);
ie.addEventListener('click', trigger);
bbc.addEventListener('click', trigger);
cnbc.addEventListener('click', trigger);
ndtv.addEventListener('click', trigger);
it.addEventListener('click', trigger);


function trigger(event) {
    if(event.currentTarget) {
        if(deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choiceResult) {
                console.log(choiceResult.outcome);

                if(choiceResult.outcome === 'dismissed') {
                    console.log('User cancelled');
                } else {
                    console.log('User added');
                }
            });
        }

        deferredPrompt = null;
    }
}
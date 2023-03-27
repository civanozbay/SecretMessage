const {hash} = window.location;

const message = atob(hash.replace('#',''))

if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message').classList.remove('hide')

    document.querySelector('h1').innerHTML =message;
}

document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault(); // stop the default behaviour which submit the form the directly.Since we don't have any database its unneccessary

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input);

    const linkInput = document.querySelector('#link-input')
    linkInput.value=`${window.location}#${encrypted}`
    linkInput.select();
    
});


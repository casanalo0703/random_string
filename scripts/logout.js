document.querySelector('#logout').addEventListener('click', e => {
    firebase.auth().signOut()
        .then(() => {
            window.location.replace("index.html");
        })
})
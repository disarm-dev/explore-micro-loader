if (!('serviceWorker' in navigator)) {
    console.log("SW not available. Launch a normal but without any offline stuff")
    launch()
} else {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful');
        launch(registration)
    }).catch(function(err) {
        // registration failed :(
        console.error('ServiceWorker registration failed: ', err);
        launch()
    });
}

const launch = (registration) => {
    if (registration) {
        console.log('this has been called after SW registration, in scope:', registration.scope)
    } else {
        console.log('somehow starting without any offline stuff - either result of missing ServiceWorker in navigator, or error in registration')
    }
}
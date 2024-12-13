self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: '../../assets/3.png', // Replace with your icon path
    };
    event.waitUntil(
        self.registration.showNotification('Desarrollo', options)
    );
});

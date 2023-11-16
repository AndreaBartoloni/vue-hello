const {createApp} = Vue;

createApp({
    data() {
        return {
            messaggio: "Benvenuto in Vuejs",
            image: "https://unsplash.it/300/300?image=15",
        }
    },
}).mount("#app");
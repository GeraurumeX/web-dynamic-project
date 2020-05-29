import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6aO10bV4GdE4Qyol0XNr36G_bj5bSxyA",
    authDomain: "web-dinamic-project.firebaseapp.com",
    databaseURL: "https://web-dinamic-project.firebaseio.com",
    projectId: "web-dinamic-project",
    storageBucket: "web-dinamic-project.appspot.com",
    messagingSenderId: "670856872582",
    appId: "1:670856872582:web:303d784de0769da9f38707",
};

const init = () => firebase.initializeApp(firebaseConfig);

init();
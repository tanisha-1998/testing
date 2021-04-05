const firebaseConfig = {
  apiKey: "AIzaSyBJ68YuFUZfS1Lo15gmA0IiXjS0ZW5ReAQ",
  authDomain: "test-e44b0.firebaseapp.com",
  projectId: "test-e44b0",
  storageBucket: "test-e44b0.appspot.com",
  messagingSenderId: "673380496420",
  appId: "1:673380496420:web:d69fb91eba1225a5ae94b1",
  measurementId: "G-1GYLNHRB4D",
};

console.log("App started.....");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleLogin = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      
      let credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log("RUNING: ", credential, token, user)
      console.log("RESULT: ", result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log("ERROR: ", error)
      // ...
    });
};

let provider = new firebase.auth.GoogleAuthProvider();


const button = document.getElementById("google-login")
button.onclick = function() {googleLogin(provider)};


console.log(button)
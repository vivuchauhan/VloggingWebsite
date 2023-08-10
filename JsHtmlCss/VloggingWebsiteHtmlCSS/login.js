// Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
    apiKey: "AIzaSyD-g0luuhCxuYucICjE_CbzaSB3r2U_q0g",
    authDomain: "vivekchauhanvlogs-9bf34.firebaseapp.com",
    databaseURL: "https://vivekchauhanvlogs-9bf34-default-rtdb.firebaseio.com",
    projectId: "vivekchauhanvlogs-9bf34",
    storageBucket: "vivekchauhanvlogs-9bf34.appspot.com",
    messagingSenderId: "539400033491",
    appId: "1:539400033491:web:311cfb7727c827bf7af026",
    measurementId: "G-T2H7RNF049"
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   const auth = getAuth();
  //  console.log(app);

   //----- Login code start	  
   document.getElementById("login").addEventListener("click", function() {
    console.log("login clicked");
     var email =  document.getElementById("email").value;
     var password = document.getElementById("password").value;

     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       alert("Login successfully!!!");
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage);
       alert(errorMessage);
     });		  		  
   });
   //----- End
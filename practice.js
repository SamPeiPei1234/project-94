
//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyCfA8AvVZpWjvlOwUxKkBEimexHdO2mcUg",
    authDomain: "kwitter-291ac.firebaseapp.com",
    databaseURL: "https://kwitter-291ac-default-rtdb.firebaseio.com",
    projectId: "kwitter-291ac",
    storageBucket: "kwitter-291ac.appspot.com",
    messagingSenderId: "776854604557",
    appId: "1:776854604557:web:599e0e4627d2f496df7e44"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function AddUser(){
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});
}
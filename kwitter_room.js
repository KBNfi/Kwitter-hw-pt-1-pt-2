
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDCAgcY04gXaSFrB_6XbV61-LLxq3mrwUY",
      authDomain: "kwitter-815fd.firebaseapp.com",
      projectId: "kwitter-815fd",
      storageBucket: "kwitter-815fd.appspot.com",
      messagingSenderId: "723659587316",
      appId: "1:723659587316:web:7d8a70b9c42320be6768a1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

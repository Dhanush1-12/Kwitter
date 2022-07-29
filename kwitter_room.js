
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDBoF0ES0S4BbzajQA-FGBw3VdlwfLp3Uk",
      authDomain: "kwitter-cff6b.firebaseapp.com",
      databaseURL: "https://kwitter-cff6b-default-rtdb.firebaseio.com",
      projectId: "kwitter-cff6b",
      storageBucket: "kwitter-cff6b.appspot.com",
      messagingSenderId: "288039024297",
      appId: "1:288039024297:web:7e3d23e657f51ca90cdbb8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById ("username").innerHTML="WELCOME "+user_name;

    function addroom(){
      roomname=document.getElementById ("room_name").value;
      firebase.database().ref("/").child(roomname).update();
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  rows="<div class='room_name' id='"+Room_names+"' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById ("output").innerHTML+=rows;

                  //End code
            });
      });
}
getData();
function redirect(roomname){
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}

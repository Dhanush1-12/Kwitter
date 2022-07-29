//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    
function send(){
      message=document.getElementById ("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:message,
      likes:0
      });
      document.getElementById ("msg").value="";
}    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data["name"];
message=message_data["message"];
likes=message_data["likes"];
name_row="<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>";

message_row="<h4 class='message_h4'>"+message+"</h4>";

like_row="<button class='btn-warning' id='"+firebase_message_id+"' value="+likes+" onclick='updatelike(this.id)'>";
like_content="<span class='glyphicon glyphicon-thumbs-up'>Like : "+likes+"</span> </button> <hr>";
content=name_row+message_row+like_row+like_content;
document.getElementById ("output").innerHTML+=content;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log("updating likes");
    likes=document.getElementById (message_id).value;
    console.log("likes",likes);
    updatedlikes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
      likes:updatedlikes
    });
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}

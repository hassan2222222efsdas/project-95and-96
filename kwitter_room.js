
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7DBizqUc8-tz5L6EAodRG4hhkuj3EAP8",
  authDomain: "kwitter-7f70e.firebaseapp.com",
  databaseURL: "https://kwitter-7f70e-default-rtdb.firebaseio.com",
  projectId: "kwitter-7f70e",
  storageBucket: "kwitter-7f70e.appspot.com",
  messagingSenderId: "578314309962",
  appId: "1:578314309962:web:1dbdafeeee66d5d26c71b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

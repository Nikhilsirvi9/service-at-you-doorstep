const firebaseConfig = {
  apiKey: "AIzaSyBEBchR7h63Vw0fXoob80BGmxCe_rYcoPY",
  authDomain: "service-at-your-doorstep-160f4.firebaseapp.com",
  databaseURL: "https://service-at-your-doorstep-160f4-default-rtdb.firebaseio.com",
  projectId: "service-at-your-doorstep-160f4",
  storageBucket: "service-at-your-doorstep-160f4.appspot.com",
  messagingSenderId: "298395486122",
  appId: "1:298395486122:web:51bd96377fb3aa1feb4dd3"
};
firebase.initializeApp(firebaseConfig);
var servicedb = firebase.database().ref('registration-form');

document.getElementById("registration-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var profession = document.getElementById('profession').value;
  var experience = document.getElementById('experience').value;
  var skills = document.getElementById('skills').value;
  
  saveMassages(name,email,profession,experience,skills)
  document.getElementById('custom-alert').style.display = 'block';
  setTimeout(function() {
    window.location.href = 'home.html'; // Redirect to previous page
  }, 1500);
}

const saveMassages = (name ,email,profession, experience,skills) => {
  var newservicedb = servicedb.push();
  newservicedb.set({
    name:name,
    email: email,
    profession : profession,
    experience: experience,
    skills: skills,
  })
}


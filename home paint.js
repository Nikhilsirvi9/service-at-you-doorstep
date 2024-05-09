// Initialize Firebase
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
  
  // Get a reference to the database service
  const database = firebase.database();
  
  const providersList = document.getElementById('providers-list');
  const providerForm = document.getElementById('provider-form');
  const saveToDatabaseButton = document.getElementById('save-to-database');
  
  // Function to save provider data to the database
  function saveProviderToDatabase(name, email, phone, city) {
    database.ref('service-providers').push({
      name: name,
      email: email,
      phone: phone,
      city: city
    });
  }
  
  // Function to display providers from the database
  function displayProvidersFromDatabase() {
    database.ref('service-providers').on('value', function(snapshot) {
      providersList.innerHTML = '';
      snapshot.forEach(function(childSnapshot) {
        const provider = childSnapshot.val();
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${provider.name}</strong><br>
          Email: ${provider.email}<br>
          Phone: ${provider.phone}<br>
          City: ${provider.city}
        `;
        providersList.appendChild(listItem);
      });
    });
  }
  
  // Display initial providers from the database
  displayProvidersFromDatabase();
  
  // Event listener for form submission
  providerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    
    // Save provider data to the database
    saveProviderToDatabase(name, email, phone, city);
  
    // Clear form fields
    providerForm.reset();
  });
  
  // Event listener for save to database button
  saveToDatabaseButton.addEventListener('click', function() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    
    // Save provider data to the database
    saveProviderToDatabase(name, email, phone, city);
  
    // Clear form fields
    providerForm.reset();
  });
  
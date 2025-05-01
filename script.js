// // Function to display the adoption form when a pet is clicked
// // script.js
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault();
    
//     // Get username and password
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    
//     // Simple login validation
//     if (username === 'user' && password === 'password123') {
//       // Redirect to home page
//       window.location.href = 'home.html';
//     } else {
//       alert('Incorrect username or password.');
//     }
//   });
  // Add click functionality to category cards using data attributes
// document.addEventListener('DOMContentLoaded', () => {
//   const categories = document.querySelectorAll('.category');
//   categories.forEach(card => {
//     card.addEventListener('click', () => {
//       const url = card.getAttribute('data-href');
//       if (url) {
//         window.location.href = url;
//       }
//     });
//   });
// });
// Handle category card click navigation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.category').forEach(card => {
    card.addEventListener('click', () => {
      const url = card.dataset.href;
      if (url) window.location.href = url;
    });
  });
});

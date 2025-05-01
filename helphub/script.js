// Select the button and the form using their IDs
const volunteerButton = document.getElementById('volunteerButton');
const volunteerForm = document.getElementById('volunteerForm');

// Add an event listener to the button
volunteerButton.addEventListener('click', () => {
  // Toggle the "hidden" class on the form
  volunteerForm.classList.toggle('hidden');
});
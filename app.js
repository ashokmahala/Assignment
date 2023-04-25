// Get the job board container element
const jobBoard = document.getElementById('job-board');

// Get the job card elements
const jobCards = jobBoard.querySelectorAll('.job-card');

// Get the job archive buttons
const archiveButtons = jobBoard.querySelectorAll('.archive-button');

// Loop through each job card
jobCards.forEach((card) => {
  // Get the deadline element for the current job card
  const deadlineEl = card.querySelector('.deadline');
  // Get the deadline value
  const deadlineValue = deadlineEl.getAttribute('data-value');
  // Get the current date
  const currentDate = new Date().getTime();
  // Calculate the time difference between the deadline and current date
  const timeDifference = deadlineValue - currentDate;
  // Calculate the number of days left until the deadline
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  // Set the background color of the job card based on the number of days left
  if (daysLeft > 21) {
    card.style.backgroundColor = '#75c24e';
  } else if (daysLeft > 14) {
    card.style.backgroundColor = '#f2d849';
  } else {
    card.style.backgroundColor = '#e04a4a';
  }
});

// Loop through each archive button
archiveButtons.forEach((button) => {
  // Add a click event listener to the current archive button
  button.addEventListener('click', () => {
    // Get the parent job card element of the current archive button
    const parentCard = button.closest('.job-card');
    // Hide the parent job card element
    parentCard.style.display = 'none';
  });
});

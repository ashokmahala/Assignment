const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const location = document.getElementById('location').value;
  const deadline = document.getElementById('deadline').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const job = {
    title,
    description,
    location,
    deadline,
    phone,
    email
  };

  fetch('/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Job posted:', data);
    // Optionally, redirect to the job board page
  })
  .catch(error => {
    console.error('Error posting job:', error);
  });
});


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
  const userDetailsContainer = document.getElementById('user-details');

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('card');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = 'https://i.pinimg.com/564x/1e/e3/ae/1ee3aeb81e19166fa2f59a99c932649f.jpg';
    profileImage.alt = 'Profile Image';

    const username = document.createElement('p');
    username.classList.add('name');
    username.textContent = ` ${user.name}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${user.phone}`;

    const company = document.createElement('p');
    company.textContent = `Company: ${user.company.name}`;

    userCard.appendChild(profileImage);
    userCard.appendChild(username);
    userCard.appendChild(email);
    userCard.appendChild(phone);
    userCard.appendChild(company);

    userDetailsContainer.appendChild(userCard);

    console.log('Username:', user.name);
    console.log('Email:', user.email);
    console.log('Phone:', user.phone);
    console.log('Company:', user.company.name);
  });
})
.catch(error => console.error(error));

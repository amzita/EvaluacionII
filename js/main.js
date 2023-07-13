
  // Obtener los datos de los usuarios desde la API
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => response.json())
    .then(users => {
      const userDetailsContainer = document.getElementById('user-details');

      // Iterar sobre los usuarios y crear los componentes individuales
      users.forEach(user => {
        const userComponent = document.createElement('div');
        userComponent.classList.add('user-component');

        const username = document.createElement('p');
        username.classList.add('name');
        username.textContent = `Username: ${user.name}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${user.phone}`;

        const company = document.createElement('p');
        company.textContent = `Company: ${user.company.name}`;

        userComponent.appendChild(username);
        userComponent.appendChild(email);
        userComponent.appendChild(phone);
        userComponent.appendChild(company);

        userDetailsContainer.appendChild(userComponent);
      });
    })
    .catch(error => console.error(error));
  

  
 

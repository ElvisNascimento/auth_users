document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Faz a chamada à API para autenticar o usuário
    authenticateUser(username, password)
      .then(userData => {
        // Exibe os dados do usuário autenticado no crachá
        showUserData(userData);
      })
      .catch(error => {
        // Caso haja erro na autenticação, exibe mensagem de erro
        alert(error);
      });
  });
  
  async function authenticateUser(username, password) {
    // Faz a requisição para a API de autenticação com os dados do usuário
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data.users);
  
      const users = data.users;
    
      // Verifica se os dados do usuário estão corretos
      const authenticatedUser = users.
      find(user => user.username === username &&
         user.password === password);
    
      if (!authenticatedUser) {
        throw new Error("Usuário ou senha inválidos.");
      }
    
      return authenticatedUser;
  }
  
  function showUserData(userData) {
    // Esconde o formulário de login
    document.getElementById("loginForm").style.display = "none";
  
    // Preenche os dados do crachá com as informações do usuário autenticado
    document.getElementById("cracha").style.display = "block";
    document.getElementById("idNumber").innerText = userData.id;
    document.getElementById("userImage").src = userData.image;
    document.getElementById("firstName").innerText = userData.firstName;
    document.getElementById("lastName").innerText = userData.lastName;
    document.getElementById("email").innerText = userData.email;
    document.getElementById("gender").innerText = userData.gender;

  }
  
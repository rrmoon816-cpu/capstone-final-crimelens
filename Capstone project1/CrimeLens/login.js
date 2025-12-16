const container = document.querySelector('.container'); 
const registerBtn = document.querySelector('.register-btn'); 
const loginBtn = document.querySelector('.login-btn'); 
 
registerBtn.addEventListener('click', () => { 
    container.classList.add('active'); 
}); 
 
loginBtn.addEventListener('click', () => { 
    container.classList.remove('active'); 
});

// Handle Login Form Submission
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // In a real scenario, username could be email. Adjust as needed.
    const loginData = {
        email: username, // Assuming username is email
        password: password
    };

    const result = await apiCall(API_CONFIG.ENDPOINTS.LOGIN, 'POST', loginData);
    
    if (result.success) {
        alert('Login successful! Welcome ' + result.data.user.username);
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(result.data.user));
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Login failed: ' + (result.data.message || result.error));
    }
});

// Handle Registration Form Submission
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = registerForm.querySelectorAll('input')[0].value;
    const email = registerForm.querySelectorAll('input')[1].value;
    const password = registerForm.querySelectorAll('input')[2].value;
    const phone = registerForm.querySelectorAll('input')[3].value;

    const registerData = {
        username: username,
        email: email,
        password: password
    };

    const result = await apiCall(API_CONFIG.ENDPOINTS.REGISTER, 'POST', registerData);
    
    if (result.success) {
        alert('Registration successful! Please login.');
        // Switch to login form
        container.classList.remove('active');
        registerForm.reset();
    } else {
        alert('Registration failed: ' + (result.data.message || result.error));
    }
});
function exploreLinks() {
    window.scrollTo({ 
        top: 800, 
        behavior: "smooth" 
    });
}

document.getElementById("myCard").addEventListener("click", function() {
    window.open("central-links.html", "_blank");
});

// Check if user is logged in and display username
window.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    // Check if user info element exists (we'll add this to HTML)
    const userInfoElement = document.getElementById('userInfo');
    
    if (user && userInfoElement) {
        userInfoElement.innerHTML = `
            <span>Welcome, ${user.username}!</span>
            <button onclick="logout()" class="logout-btn">Logout</button>
        `;
    }
});

// Logout function
async function logout() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.email) {
        // Call logout API
        await apiCall(API_CONFIG.ENDPOINTS.LOGOUT, 'POST', { email: user.email });
    }
    
    // Clear local storage
    localStorage.removeItem('user');
    
    // Redirect to login page
    alert('Logged out successfully!');
    window.location.href = 'login.html';
}

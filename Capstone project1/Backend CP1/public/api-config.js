// API Configuration - Works for both local development and Vercel deployment
const API_CONFIG = {
    // Automatically use localhost for development, Vercel URL for production
    BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:4000/api/v1'
        : 'https://capstone-final-crimelens-api.vercel.app/api/v1',
    ENDPOINTS: {
        REGISTER: '/users/register',
        LOGIN: '/users/login',
        LOGOUT: '/users/logout',
        CREATE_POST: '/posts/create'
    }
};

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(API_CONFIG.BASE_URL + endpoint, options);
        const result = await response.json();

        return {
            success: response.ok,
            status: response.status,
            data: result
        };
    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Export for use in other files
window.API_CONFIG = API_CONFIG;
window.apiCall = apiCall;

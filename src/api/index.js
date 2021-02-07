import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:5000"
});

// sending headers to server
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchPortfolio = () => API.get('/portfolio');
export const fetchPortfolioByID = (portfolio_id) => API.get(`/portfolio/${portfolio_id}`);
export const fetchUserPortfolio = (user_id) => API.get(`/portfolio/creator/${user_id}`);
export const createPortfolio = (newPortfolio) => API.post('/portfolio', newPortfolio);
export const updatePortfolio = (portfolio_id, editPortfolio) => API.patch(`/portfolio/edit/${portfolio_id}`, editPortfolio);
export const deletePortfolio = (portfolio_id) => API.delete(`/portfolio/delete/${portfolio_id}`);
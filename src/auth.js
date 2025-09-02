export const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
};

export const login = (token) => {
    localStorage.setItem('token', token);
};

export const logout = () => {
    localStorage.removeItem('token');
};

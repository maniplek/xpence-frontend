const token = `Bearer ${localStorage.getItem('X-penseToken')}`;
const config = {
    headers: {
        Authorization: token,
    }
};

export default config;

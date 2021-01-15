export const API_URL = 'https://5ffc18eb63ea2f0017bdbac2.mockapi.io/api/';

export const fetchApiUserById = (id) => {
  return fetch(`${API_URL}users/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchPosts = () => {
  return fetch(`${API_URL}posts`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

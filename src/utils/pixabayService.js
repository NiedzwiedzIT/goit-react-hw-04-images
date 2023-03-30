function fetchPixabay(searchQuery, page, perPage) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=33469403-656c8c24e089f5eb60270e06d&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(
      new Error(`Sorry, bad request from this query: ${searchQuery}`)
    );
  });
}

const api = { fetchPixabay };

export default api;

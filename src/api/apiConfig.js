const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '36ce85f9c5a933587260cc1682da4325',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
const getImagePath = (imagePath?: string, fullSize?: boolean) =>{
    return imagePath
    ?`https://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    :"htpps://links.papareact.com/o8z";

};
export default getImagePath;
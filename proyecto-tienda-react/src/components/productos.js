const products = [
    { id: "1", name: "Positions", artista: "Ariana Grande", stock: 4, img: "../images/ArianaPositions.png", category: "pop"},
    { id: "2", name: "Aladdin Sane", artista: "David Bowie", stock: 8,  img: "../images/Aladdin-Sane.webp", category:"clasicos" },
    { id: "3", name: "Abbey Road", artista: "The Beatles", stock: 10,  img: "../images/Beatles-Sgt-Pepper-Cover.jpg", category:"clasicos" },
    { id: "4", name: "Folklore", artista: "Taylor Swift", stock: 10, img: "../images/FolkloreTaylor.png", category:"pop" },
    { id: "5", name: "Dookie", artista: "Green Day", stock: 6, img: "../images/Green-Day-Dookie.jpg", category:"rock"},
    { id: "6", name: "Teenage Dream", artista: "Katy Perry", stock: 8, img: "../images/Katy-Perry-Teenage-Dream.webp", category:"pop"},
    { id: "7", name: "Flowers", artista: "Miley Cyrus", stock: 4, img: "../images/MileyFlowers.jpg", category:"tendencias"},
    { id: "8", name: "Nevermind", artista: "Nirvana", stock: 8, img: "../images/Nirvana-Nevermind.webp", category:"rock"},
    { id: "9", name: "The other side of the moon", artista: "Pink Floyd", stock: 6, img: "../images/Pink-Floyd-Dark-Side-Of-The-Moon.webp", category:"clasicos"},
    { id: "10", name: "Purple Rain", artista: "Prince", stock: 4, img: "../images/Prince-Purple-Rain.webp", category: "clasicos"},
    { id: "11", name: "Sheer Heart Attack", artista: "Queen", stock: 4, img: "../images/sheer-heart-attack.webp", category:"clasicos"},
    { id: "12", name: "1989 (Taylor's Version)", artista: "Taylor Swift", stock: 4, img: "../images/TaylorSwift1989(Taylor'sVersion).png", category:"tendencias"},
    { id: "13", name: "Is this it", artista: "The Strokes", stock: 4, img: "../images/The-Strokes-Is-This-It.webp", category:"rock"},
];

 
export const getProducts = () => {

    return new Promise( (resolve, reject) => {
        if( products.length > 0) {
            setTimeout( () => { 
                resolve(products)

             }, 500 )
        } else {
            reject("No hay productos")
        }
    } )
}

export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 500 )
      
    });
  };
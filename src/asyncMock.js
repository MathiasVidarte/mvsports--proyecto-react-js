const products = [
    {
        id: '1',
        name: 'Botin de futbol Adidas x-speed',
        price: 100,
        category: 'botines',
        img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/9cfd0bd8bc344663b2d4ad7b009bc720_9366/Botines_X_Speedflow.1_Terreno_Firme_Azul_GW7457_01_standard.jpg',   
        stock: 8,
        description:'Descripcion botin de futbol'
    },
       {id:'2', name: 'Pelota basketball Spalding', price: 50, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_648314-MLU50272804921_062022-O.jpg'},
       {id:'3', name: 'Set mancuernas + discos', price: 75, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_901865-MLU31241011959_062019-F.webp'},
    ]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
            }, 500)
        })
    }
                  
export const getProductsById =(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
        })
    }

 export const getProductsByCategory = (category) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const filteredProducts = products.filter((prod) => prod.category === category);
            resolve(filteredProducts);
          }, 500);
        });
      };
      



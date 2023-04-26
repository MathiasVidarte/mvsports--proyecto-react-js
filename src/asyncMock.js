const products = [
    {
        id: '1',
        name: 'Botin de futbol Adidas x-speed',
        price: 100,
        category: 'calzado',
        img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/2700c22cb7174a5787c7ae5e01803365_9366/Zapatos_de_futbol_X_Speedflow.1_Terreno_Firme_Morado_GW7453_22_model.jpg',   
        stock: 8,
        description:'Descripcion botin de futbol'
    },
       {id:'2', name: 'Pelota basketball Spalding', price: 50, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_648314-MLU50272804921_062022-O.jpg'},
       {id:'3', name: 'Set mancuernas + discos', price: 75, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_901865-MLU31241011959_062019-F.webp'},
       {id:'4', name: 'T-shirt Nike ', price:45, category:'vestimenta', img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b110e8b1-ffb7-4ad4-8f7d-3b0e21857ec6/swoosh-mens-t-shirt-Twbhfn.png'},
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
      



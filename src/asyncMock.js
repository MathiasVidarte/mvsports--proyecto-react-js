const products = [
    {
        id: '1',
        name: 'Botin de futbol Adidas x-speed',
        price: 100,
        category: 'calzado',
        img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/2700c22cb7174a5787c7ae5e01803365_9366/Zapatos_de_futbol_X_Speedflow.1_Terreno_Firme_Morado_GW7453_22_model.jpg',   
        stock: 8,
        description:'Bota Adidas X Speedportal FG'
    },
       {id:'2', name: 'Pelota basketball Spalding', price: 50, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_648314-MLU50272804921_062022-O.jpg', stock:5, description:'Spalding Balón Baloncesto Excel TF-500'},
       {id:'3', name: 'Set mancuernas + discos', price: 75, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_901865-MLU31241011959_062019-F.webp', stock:3, description:'Kit 2 mancuernas cromadas + 20 kgs de Pesas a Elección.'},
       {id:'4', name: 'T-shirt Nike ', price: 45, category:'vestimenta', img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b110e8b1-ffb7-4ad4-8f7d-3b0e21857ec6/swoosh-mens-t-shirt-Twbhfn.png', stock: 12, description:'La camiseta para hombre Nike Sportswear te ofrece un tacto suave y un logotipo swoosh de la marca Nike estampado en el pecho.'},
       {id:'5', name: 'Short adidas Real Madrid authentic 2020-2021', price: 25, category:'sale', img:'https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/f/m/fm4734_imagen-del-pantalon-corto-futbol-adidas-real-madrid-authentic-primera-equipacion-2020-2021-blanco_1_frontal.jpg', stock: 2, description:'Este pantalón corto es el mismo que utilizaron los jugadores del Real Madrid en sus partidos como local durante la temporada 2020 - 2021.'},
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
      



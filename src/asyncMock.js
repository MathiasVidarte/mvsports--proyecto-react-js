const produtcs = [
    {
        id: '1',
        name: 'Botin de futbol Adidas x-speed',
        price: 100,
        category: 'botines',
        img:'https://images.app.goo.gl/S4b4VUA7Woi2VXy28',   
        stock: 8,
        description:'Descripcion botin de futbol'
    },
       {id:'2', name: 'Pelota basketball Spalding', price: 50, category:'accesorios', img:'https://images.app.goo.gl/MzkEvby3w7dq17AL8'},
       {id:'3', name: 'Set mancuernas + discos', price: 75, category:'accesorios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_901865-MLU31241011959_062019-F.webp'},
    ]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(produtcs)
            }, 500)
        })
    }
                  
export const getProductsById =(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(produtcs.find(prod => prod.id === productId))
        }, 500)
        })
    }



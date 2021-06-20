const zapatos = [
    {
        title: "Fashion",
        reference: "Blanco y negro",
        price: "55.000 COP",
        id: 1,
    },

    {
        title: "Alexander",
        reference: "Blanco, negro y multicolor",
        price: "55.000 COP",
        id: 2,
    },

    {
        title: "Skechers",
        reference: "Multicolor",
        price: "55.000 COP",
        id: 3,
    },

    {
        title: "Raptor Vaquita",
        reference: "Blancon con negro",
        price: "60.000 COP",
        id: 4,
    }
];

const getZapatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve(zapatos);   
            }else{
                reject("Hubo un error");
            }
        }, 1500);
    });
};

getZapatos().then((zapatos) => {console.log(zapatos)}).catch(error =>{console.log(error)})
const data = [
{   
    id:1,
    img : "https://www.kvnstatic.com/foto-prod/04560614/g/04560614_2-remera-hombre-kevingston.jpg", 
    product : "Remera Kanji", 
    price : 3500, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:2,
    img :"https://www.kvnstatic.com/foto-prod/02975000/g/02975000-remera-blanca-hombre.webp", 
    product : "Remera Crisp", 
    price : 3500, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:3,
    img :"https://www.kvnstatic.com/foto-prod/039A2905/g/039A2905-remera-hombre-kevingston.webp", 
    product : "Remera Aputure", 
    price : 2500, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:4,
    img :"https://www.kvnstatic.com/foto-prod/04545073/g/04545073-remera-lisa-kevingston.webp", 
    product : "Remera Concept", 
    price : 3000, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:5,
    img :"https://www.kvnstatic.com/foto-prod/04560002/g/04560002-remera-manga-corta-kevingston.webp", 
    product : "Remera Membrecy", 
    price : 2580, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:6,
    img :"https://www.kvnstatic.com/foto-prod/039A2901/g/039A2901-remera-rayada-hombre-kevingston.webp", 
    product : "Remera Lowel", 
    price : 3600, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "remeras"
},
{
    id:7,
    img :"https://www.kvnstatic.com/foto-prod/07699000/g/07699000.webp", 
    product : "Jean Static", 
    price : 3600, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "pantalones"
},
{
    id:8,
    img :"https://www.kvnstatic.com/foto-prod/0766130S/g/0766130S.webp", 
    product : "Jean Cosqui", 
    price : 3600, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "pantalones"
},
{
    id:9,
    img :"https://www.kvnstatic.com/foto-prod/076E527V/g/076E527V_1.webp", 
    product : "Jean Casil", 
    price : 3600, 
    stock : 10,
    description: "Una clasica remera de algodón de alta calidad. Disponible en blanco, negro y gris",
    category: "pantalones"
},
];


export default function getItems ( ){

    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
         resolve(data);
      }, 1500)
     
    })
  }
  
export   function getItem(idItem){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let itemFind = data.find((item) => {
                return item.id === Number(idItem)
            });
            if (itemFind) resolve (itemFind);
            else reject (new Error("Item no encontrado"))
        }, 1500) 
      })
  }

  export function getItemsByCategory (cat){

    return new Promise ((resolve, reject)=>{
        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout(()=>{
            console.log("encontramos",itemFind)
            if (itemFind) resolve (itemFind);
            else reject (new Error("Item no encontrado"))

        }, 1500)
    })
  }
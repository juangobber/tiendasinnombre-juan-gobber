const data = [
{   
    id:1,
    img : "https://www.kvnstatic.com/foto-prod/04560614/g/04560614_2-remera-hombre-kevingston.jpg", 
    product : "Remera Kanji", 
    price : 3500, 
    stock : 10,
},
{
    id:2,
    img :"https://www.kvnstatic.com/foto-prod/02975000/g/02975000-remera-blanca-hombre.webp", 
    product : "Remera Crisp", 
    price : 3500, 
    stock : 10,
},
{
    id:3,
    img :"https://www.kvnstatic.com/foto-prod/039A2905/g/039A2905-remera-hombre-kevingston.webp", 
    product : "Remera Aputure", 
    price : 2500, 
    stock : 10,
},
{
    id:4,
    img :"https://www.kvnstatic.com/foto-prod/04545073/g/04545073-remera-lisa-kevingston.webp", 
    product : "Remera Concept", 
    price : 3000, 
    stock : 10,
},
{
    id:5,
    img :"https://www.kvnstatic.com/foto-prod/04560002/g/04560002-remera-manga-corta-kevingston.webp", 
    product : "Remera Membrecy", 
    price : 2580, 
    stock : 10,
},
{
    id:6,
    img :"https://www.kvnstatic.com/foto-prod/039A2901/g/039A2901-remera-rayada-hombre-kevingston.webp", 
    product : "Remera Lowel", 
    price : 3600, 
    stock : 10,
},
];

export default function getItems ( ){

    return new Promise ((resolve, reject)=>{
      setTimeout(()=>{
         resolve(data);
      }, 3000)
     
    })
  }
  
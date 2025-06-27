//Inicio del programa
console.log("¡Gestion de Datos con objetos, Sets y Maps!");

//Definimos el objeto "productos"
const productos={
    1:{ id:1, nombre:"Grabadora", precio:1500 },
    2:{ id:2, nombre:"Camara", precio:2500},
    3:{ id:3, nombre:"Reproductor", precio:800}
};
console.log("Objeto productos: ", productos);

//Creamos el Set con el nombre de los productos
const setProductos= new Set(Object.values(productos).map(productos=> productos.nombre));
console.log("Set de productos unicos: ", setProductos);

//Creamos un Map para agregar las categorias de los productos
const mapProductos = new Map([
    ["Electronica","Grabadora"],
    ["Audiovisuales","Camara"],
    ["Multimedia","Reproductor"]
]);

console.log("Map de productos y categorias: ", mapProductos);

//Recorremos el objeto productos
for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

//Recorremos el Set poductos
for (const productos of setProductos){
    console.log("Producto unico: ", productos);
}

//Recorremos el Map de productos
mapProductos.forEach ((producto, categoria) => {
    console.log(`Categoria: ${categoria}, producto: ${producto}`);  
});

//Validación de los datos 
console.log("Pruebas completas de gestion de datos: ");
console.log("Lista de productos (objeto)", productos);
console.log("Lista de productos (set)", setProductos);
console.log("Categorias y productos (Map):",mapProductos);

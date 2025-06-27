# Gestión de Datos con Objetos, Sets y Maps

Este programa demuestra el uso de diferentes estructuras de datos en JavaScript: Objetos, Sets y Maps, para gestionar información de productos.

## Estructuras de Datos Utilizadas

### 1. Objeto `productos`
- Contiene productos con estructura clave-valor
- Cada producto tiene:
  - `id`: Identificador único
  - `nombre`: Nombre del producto
  - `precio`: Valor del producto

### 2. Set `setProductos`
- Almacena únicamente los nombres de los productos (valores únicos)
- Creado a partir de los valores del objeto `productos`

### 3. Map `mapProductos`
- Relaciona categorías con productos específicos
- Estructura clave-valor donde:
  - Clave: Nombre de la categoría
  - Valor: Nombre del producto asociado

## Funcionalidades

1. **Inicialización**: Crea y muestra las estructuras de datos

```javascript
// Inicio del programa
console.log("¡Gestión de Datos con objetos, Sets y Maps!");

// Objeto productos
const productos = {
    1: { id:1, nombre:"Grabadora", precio:1500 },
    2: { id:2, nombre:"Camara", precio:2500 },
    3: { id:3, nombre:"Reproductor", precio:800 }
};
console.log("Objeto productos: ", productos);
```

2. **Recorrido**:
   - Itera sobre el objeto `productos` mostrando IDs y detalles
   - Itera sobre el Set mostrando productos únicos
   - Itera sobre el Map mostrando categorías y productos asociados
``` javascript
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

```

3. **Validación**: Muestra el contenido final de todas las estructuras
```javascript
//Validación de los datos 
console.log("Pruebas completas de gestion de datos: ");
console.log("Lista de productos (objeto)", productos);
console.log("Lista de productos (set)", setProductos);
console.log("Categorias y productos (Map):",mapProductos);
```


## Ejecución

Al ejecutar el programa se mostrará en consola:
1. El objeto productos completo
2. El Set con nombres de productos únicos
3. El Map con categorías y productos
4. Los resultados de los bucles de iteración
5. Las validaciones finales de los datos

## Uso

Este código puede servir como base para:
- Sistemas de inventario
- Catálogos de productos
- Ejemplos educativos de estructuras de datos en JavaScript

## Notas

- El programa no requiere interacción del usuario
- Se ejecuta completamente en el entorno de Node.js o navegador



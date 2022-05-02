class Orden{
    static contadorOrdenes=0;
    static MAX_PRODUCTOS=5;
    //const arreglo=new Array();
    constructor(){
        this.idOrden=++Orden.contadorOrdenes;
        this.productos=[];
        this.contadorProductosAgregados=0;
    }
    get getIdOrden(){
return this.idOrden;
    }
    agregarProducto(producto){
        if (this.productos.length<Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);//agrega el producto
            //this.productos[this.contadorProductosAgregados++]=producto;
        } else {
            console.log("no se puede agregar más productos")
        }
    }
    calcularTotal(){
        let totalVenta=0;
         for (let i = 0; i < this.productos.length; i++) {
          totalVenta+=this.productos[i].getPrecio;
         }
       
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this.productos){
            productosOrden+=producto.toString()+"  "
        }
        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()}, Producto: ${productosOrden}`);
    }
    static get MAX_PRODUCTOS(){
       return Orden.MAX_PRODUCTOS;
    }
}

class Producto{
    static contProduct=0;
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
        this.idProducto=++Producto.contProduct;
    }
    get getIdProducto (){
        return this.idProducto;
    }
    get getNombre (){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getPrecio(){
        return this.precio;
    }
    set setPrecio(precio){
        this.precio=precio;
    }
    toString(){
        //TODO: template sTrings
        //altgr + } + space
        return `idProducto: ${this.getIdProducto}, nombre: ${this.getNombre}, Precio: ${this.getPrecio}`; 
    }
}
let producto1=new Producto("pantalon",10);
let producto2=new Producto("camisa",5);
console.log(producto1.toString());
let orden1=new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

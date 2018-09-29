var Ventas = class {
    constructor(codigo_producto, cantidad, ) {
        this.codigo_producto = codigo_producto;
        this.cantidad = cantidad;
    }
}

var Producto = class {
    constructor(codigo, descripcion, tipo, precio_compra, precio_venta, stock) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.precio_compra = precio_compra;
        this.precio_venta = precio_venta;
        this.stock = stock;
    }
}

function Venta_dulces() {
    var tiendita = [];
    var ventas = [];
    console.log("1.Agregar producto\n 2.Modificar Stock\n 3.Registrar venta y reducir stock");
    console.log("4.Mostrar promedio de ventas realizadas\n 5.Mostrar prouctos con stock 0\n 6.Salir del sistema");
    var x = prompt("Elija una opción");
    while (x != 6) {
        switch (x) {
            case "1":
                var cod = prompt("Introduzca el codigo del nuevo producto");
                var descr = prompt("Introduza la descripcion");
                var tip = prompt("Introduzca el tipo de producto");
                var compra = prompt("Introduzca el precio de compra");
                var venta = prompt("Introduzca el precio de venta");
                var stock = prompt("Introduzca el stock");
                var nuevo_producto = new Producto(cod, descr, tip, compra, venta, stock);
                tiendita.push(nuevo_producto);
                console.log("Producto registrado.");
                break;
            case "2":
                var encontrado = false;
                var mProducto = prompt("Ingrese el codigo del producto a modificar");
                var n_stock = prompt("Ingrese el nuevo stock");
                for (let i in tiendita) {
                    if (tiendita[i].codigo == mProducto) {
                        encontrado = true;
                        tiendita[i].stock = n_stock;
                    }
                }
                if (encontrado == false) {
                    console.log("El codigo del producto no coincide con ningun producto registrado");
                }
                else{
                    console.log("El stock del producto fue modificado!");
                }
                break;
            case "3":
                var encontrado = false;
                var vProducto = prompt("Introduzca el codigo del producto vendido");
                var vCantidad = prompt("Introduzca la cantidad del producto vendido");
                for (let i in tiendita) {
                    if (tiendita[i].codigo = vProducto) {
                        encontrado = true;
                        if (tiendita[i].stock - vCantidad >= 0) {
                            tiendita[i].stock = tiendita[i].stock - vCantidad;
                            var nueva_venta = new Ventas(vProducto, vCantidad);
                            ventas.push(nueva_venta);
                        }
                        else {
                            console.log("La cantidad vendida excede al stock disponible");
                        }
                    }
                }
                if (encontrado == false) {
                    console.log("El producto ingresado no esta registrado,por favor registrelo primero.");
                }
                else{
                    console.log("Venta registrada.");
                }
                break;
            case "4":
                var total_vendido = 0;
                var cont = 0;
                for (let i in ventas) {
                    for (let j in tiendita) {
                        if (ventas[i].codigo_producto == tiendita[j].codigo) {
                            total_vendido += tiendita[j].precio_venta * ventas[i].cantidad;
                        }
                    }
                    cont += 1;
                }
                var promedio = total_vendido / cont;
                console.log("El promedio generado por venta es de:$" + promedio);
                break;
            case "5":
                var encontrado=false;
                console.log("Los siguientes productos tienen 0 de stock:");
                for (let j in tiendita) {
                    if (tiendita[j].stock == 0) {
                        encontrado=true;
                        console.log("Producto " + tiendita[j].codigo + " " + "Descripcion " + tiendita[j].descripcion);
                    }
                }
                if(encontrado==false){
                    console.log("Ningun producto tiene 0 de stock.");
                }
                break;
            default:
                console.log("Opcion invalida");
                break;
        }
        x = prompt("Elija una opción");
        console.log("1.Agregar producto\n 2.Modificar Stock\n 3.Registrar venta y reducir stock");
        console.log("4.Mostrar promedio de ventas realizadas\n 5.Mostrar prouctos con stock 0\n 6.Salir del sistema");
    }
}


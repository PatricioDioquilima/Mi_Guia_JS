  //TODO: definir clase
  class Persona{
      static contadorPersona=0;
      static get MAX_OBJ(){
        return 10;
      }
      constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
       this.idPersona=Persona.contadorPersona++;//contador
      }
      get getNombre(){
          return this.nombre;
      }
     
      set cambiarNombre(d){
          this.nombre=d;
      }
      get getApellido(){
          return this.apellido;
        }
        set setApellido(apellido){
            this.apellido=apellido;
        }
        nombreCompleto(){
            return this.idPersona+" "+this.nombre+" "+this.apellido;
        }
        toString(){
            //se llama polimorfismo
            return this.nombreCompleto();
        }
        static saludar(){
            console.log("saludo desde el metodo static")
        }
    }
    
    let persona1=new Persona("Patricio","Dioquilima");
    console.log(persona1);
    console.log(persona1.getNombre);
    persona1.cambiarNombre="Pedro";//no imprimir y hacer set a la vez
    console.log(persona1.getNombre);
    //TODO: Hosting no aplica
    //TODO: Herencia
    //sirve para reutilizar codigo
    //Class Persona es la clase padre
    class Empleado extends Persona{
      constructor(nombre,apellido,departamento){
          super(nombre,apellido);//llama al constructor del padre
        this.departamento=departamento;
    }
    get getDepartamento(){
        return this.departamento;
    }
    set setDepartamento(departamento){
        this.departamento=departamento;
    } 
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+" "+this.departamento;
    }
    //toString
    toString(){
        //llmara al metodo nombreCompleto
        return super.toString();
    }

}
let empleado1=new Empleado("Melany","camino","Contaduria");
console.log(empleado1);
//TODO:Herencia de Metodos
console.log(empleado1.nombreCompleto());//heredamos el metodo
//TODO:sobreescritura
//creamos un metodo con el mismo nombre del metodo de la clase padre, con super. llamamos al metodo que queremos
//ver linea 46
//TODO: metodo toString
console.log(empleado1.toString());//heredamos el metodo
//TODO: static
//no es posible llamar un metodo static desde un objeto, pero si desde una clase
//console.log(persona1.saludar());
Persona.saludar();
//TODO: variables estaticas
console.log(Persona.contadorPersona);
console.log(Empleado.contadorPersona);//hereda la variable estatica
//no usar this con una variable estatica
console.log(Persona.MAX_OBJ);


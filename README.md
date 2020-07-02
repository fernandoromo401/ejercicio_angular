### Autor: Fernando Romo
# Recruiting Exercise
Proyecto desarrollado en Angular
___________
## Pautas no respetadas
+ Se pidió mostrar 20 elementos por pantalla pero se dejo por defecto 8 para una mejor experiencia de usuario (UX). Tiene la opción de 20 igualmente.
+ Se mencionaba el uso de HTTP Client pero no se utilizó ya que posee un "mock data" almacenado en el servicio (Abajo hay un ejemplo de como habría sido utilizando HTTP Client) 
 ___________
## HTTP Client

### Componente.ts
En los `Imports`:
~~~
import { Service } from "../ruta"
~~~

En el `constructor` de la clase: 
+ La inyección de dependencia
~~~ 
constructor(private service: Service) {
    this.getAll()
} 
~~~

Metodo de ejemplo llamando al `servicio`:
~~~
getAll(){
  this.service.getAll().subscribe(
    data  => console.log(data) },
    error => console.log(error)}
  )
}
~~~

## Servicio.ts

En los `Imports`
~~~
import { HttpClient, HttpHeaders } from "@angular/common/http"
~~~
Configurando variables de `endpoint` y `headers`
~~~
private _headers = new HttpHeaders().set('Content-Type', 'application/json')
private _url = 'https://ejemplo/api/v1/';
~~~
En el `constructor` de la clase
~~~
constructor(private _http: HttpClient) { }
~~~
Metodo con petición `HTTP` de ejemplo
~~~
getAll():Observable<any>{
    return this._http.get<any>(this._url+'stats/' , {headers: this._headers})
}
~~~
_________
## Implemetado
+ Paginación de la tabla
+ Ordenamiento de los campos de la tabla
+ Filtro de busqueda por cualquier campo de la tabla (menos los productos)
+ Autenticacón y recuperacion de los datos de usuarios con **Auth0**
+ Simulacion de **CRUD** de la tabla
+ Implementacion de **Angular Material UI**
_________
## No desarrollado
+ El metodo **update** no se uso `Formulario Reactivo` por ende no se puede agregar o quitar productos , encambio en el metodo **create**
+ No se verificó el resultado final del `Modo Responsive` utilizando **Angular Material UI**
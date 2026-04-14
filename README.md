# NestJS Workshop – Validation Questions

---

**Q1 — Dead route diagnosis**      
  
Al hacer la petición aparece error 404 ya que al no estar el decorador de @Get en la función no se guarda en el sistema rutas por lo que al hacer la peticion esta buscando una ruta que no existe.
   
Se resuelve poniendole el decorador de @Get

---

**Q2 — When `transform: true` is not enough**  
El transform:true es global y no lanza errores, a diferencia del ParseIntPipe que es mas estricto y da un mensaje de error.

---

**Q3 — Silent strip vs hard rejection**  

Status: 201 Created (o 200 dependiendo config)
Body: el usuario creado sin el campo password  

Ejemplo:  
{
  "name": "Maria",
  "email": "m@m.com",
  "age": 20
}

Problemas de seguridad:  
El cliente cree que envió password, pero el backend lo ignora silenciosamente lo que afecta a la integridad y consistencia de los datos.

---

**Q4 — Mutation side-effect**  
Si cambia los datos internos, ya que findAll() devuelve la referencia directa por lo que un usuario podria modificarlo.

Solución: Se puede devolver una copia del arreglo.



---

**Q5 — The optional field trap**  
Caso1-> No pasa ya que el 'price:-50' viola el @isPositive  
Caso2-> Si pasa ya que todos los campos son opcionales por lo que no es necesario que envie algo  
@isOptional()-> ignora las validaciones cuando el campo no está presente pero si está presente toma todas las validaciones en cuenta.




---

**Q6 — ID reuse after deletion**
Si borramos el registro con id:1 el registro nuevo tendra un id diferente porque el nextId sigue incrementando  
findOne(1)-> no devolveria la tarea equivocada ya que la tarea uno ya no existe.  
this.tasks.length + 1-> Esto romperia el sistema ya que si eliminamos un registro pueden existir duplicados de este   


---

**Q7 — Module forgotten**  
El servidor arranaca normal pero al hacer la petición de POST /users aparece le error 404 Nor Found ya que NextJS no conoce el modulo porque este no fue asignado. Por ultimo, este es un Runtime error.  

---

**Q8 — Missing 201**  

Por defecto el @Post() devuelve 201 created asi que no es problema no poner el httpCode. este ultimo seria necesario en casos donde le cliente requiera codigos especificos.

---

**Q9 — Service throws, not returns null**  

Versión con null:  
Service:  
findOne(id: number): Product | null { 
  return this.products.find(p => p.id === id) || null; 
}
 
Controller:  
@Get(':id')  
findOne(@Param('id') id: string) {  
  const product = this.productsService.findOne(+id);  
  if (!product) {  
    throw new NotFoundException();  
  }  
  return product;  
}  

La mejor opción en este caso seria la de throw ya que esta evita que se repita logica en todo el codigo, centraliza errores y beneficia a la integridad y consistencia de los datos.

---

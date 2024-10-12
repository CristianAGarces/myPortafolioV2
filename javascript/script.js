try{
  var nombre = prompt("Diguita tu nombre");
}catch(e){
  console.log("A ocurrido un error al leer el nombre: "+e);
}

if(nombre){
  alert(
    `Hola Sr@: ${nombre}. Bienvenido a mi portafolio. Hecho por: Cristian Alexis Garces Valencia`
  );
}else{
  alert("Bienvenido señor usuario a mi portafolio");
  
}


const html = document.querySelector(".html");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const python = document.querySelector(".python");
const react = document.querySelector(".react");
const fastapi = document.querySelector(".fastapi");
const java = document.querySelector(".java");
const git = document.querySelector(".git");
const boostrap = document.querySelector(".boostrap");
const dynamo = document.querySelector(".dynamo");
const mysql = document.querySelector(".mySql");
const c = document.querySelector(".c");

html.addEventListener("click", () => {
  alert(
    "HTML 70%: Lo manejo a un buen nivel y se hacer una paguina bien diseñada y aplicando semantica de una buena manera"
  );
});
css.addEventListener("click", () => {
  alert(
    "CSS 60%: CSS lo manejo bien ya que puedo hacer varios estilos en una plataforma web y dar unas cuantas animaciones, ademas puedo adaptar mis proyectos a dispotivos moviles y pc"
  );
});
javascript.addEventListener("click", () => {
  alert(
    "JavaScript 30%: Conozco su sintaxis y puedo realizar varias cosas con el haciendo un sitio web mas interactivo y resolver varios problemas pero admito que me falta mucho que experimentar con el ademas tambien tengo la idea de como puedo trabajar haciendo solicitudes fetch a una API "
  );
});
react.addEventListener("click", () => {
  alert(
    "React 45%: Se me da bien trabajar con este framework ya que se como se usa, sus partes, separar el sitio por componentes y como se deben estructurar los proyectos aqui"
  );
});
boostrap.addEventListener("click", () => {
  alert(
    "Boostrap 30%: La libreria boostrap facilicita mucho la creacion de un sitio web ya utilizando las partes que este nos brinda como: menus, layout, form, marcos, etc."
  );
});
python.addEventListener("click", () => {
  alert(
    "Python 40%: Este lenguaje se usa en muchas zonas del software como en: IA, Analizis de datos, backend, ciencia de datos, etc. Yo lo uso 'Por ahora en el backend con fastApi'"
  );
});
fastapi.addEventListener("click", () => {
  alert(
    "FastApi 30%: Lo uso para generar un backend de forma rapida y escalable, pudiendo usarse diversamente conectandolo con las APIs que se necesiten"
  );
});
dynamo.addEventListener("click", () => {
  alert(
    "Dynamo DB 38%:este es un servicio de AWS que se usa como Base de Datos No relacional en la cual se puede trabajar con el de forma optima utilizando los servicios de AWS que se necesiten"
  );
});
mysql.addEventListener("click", () => {
  alert(
    "My Sql: Esta base de datos relacional me encuentro en proceso de que sigo aprendiendo como se usa!."
  );
});
git.addEventListener("click", () => {
  alert(
    "Git and GitHub 50%: Este  recurso lo uso de buena manera desde la mitad de mi proceso de aprendizaje y se me da bien usarlo y trabajar con el para el manejo de versiones y servicio en la nube"
  );
});
java.addEventListener("click", () => {
  alert(
    "Java 50%: Se me da bien trabajar con Java y lo aprendi en la Uni haciendo proyectos con el paradigma de programacion orientada a objetos"
  );
});
c.addEventListener("click", () => {
  alert(
    "C 25%: Es un lenguaje de programacion muy util pero casi no trabajo con el fue el primero en el que aprendi a programar y trabajamos con el estructura de datos "
  );
});

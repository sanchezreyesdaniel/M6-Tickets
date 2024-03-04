(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const m=[{usuario:"Dani",fecha:"26/10/2004",contenido:"Holaaaaaaaaaaaaaaaaaaaaa"},{id:2,usuario:"Javiercito",fecha:"02/01/2004",contenido:"jejjejejej."},{id:3,usuario:"Adri",fecha:"16/01/2004",contenido:"Naanooooooooooooooooo."}],d=[{codigo:"T006",fecha:"2024-02-28",aula:"Aula 201",grupo:"Grupo F",ordenador:"PC006",descripcion:"Problema con la impresora",alumno:"Laura Sánchez",estado:"Pendiente"},{codigo:"T007",fecha:"2024-02-29",aula:"Aula 202",grupo:"Grupo G",ordenador:"PC007",descripcion:"Problema con el sistema operativo",alumno:"Javier Fernández",estado:"Resuelto"},{codigo:"T008",fecha:"2024-03-01",aula:"Aula 203",grupo:"Grupo H",ordenador:"PC008",descripcion:"No funciona el teclado de la computadora",alumno:"Isabel Gómez",estado:"Resuelto"},{codigo:"T009",fecha:"2024-03-02",aula:"Aula 204",grupo:"Grupo I",ordenador:"PC009",descripcion:"Problema con el monitor",alumno:"Miguel Pérez",estado:"Pendiente"},{codigo:"T010",fecha:"2024-03-03",aula:"Aula 205",grupo:"Grupo J",ordenador:"PC010",descripcion:"No se puede conectar a la red",alumno:"Carmen Martínez",estado:"Resuelto"}],y=(n,a,e)=>`
        <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: 
          <span id="usuario">${n}</span>
          <span id="fecha" class="ms-4">${a}</span>
          </h5>
        <p id="texto">${e}</p>
        </div>
      </div>
      
        
        `,f={template:'<div id="comentarios">Comentarios</div>',script:()=>{let n="";m.forEach(a=>{n+=y(a.usuario,a.fecha,a.contenido)}),document.querySelector("#comentarios").innerHTML=n}},b={template:`
    <div id="comentario"></div>
    `,script:()=>{document.querySelector("#comentario").innerHTML=f.template,f.script()}},h={template:`<div class="d-flex">
    <h1>Comentarios</h1><button id="btnVolver" class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span id="codigoTicket">123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
      <label for="comentario2" class="form-label">Comentario: </label>
      <textarea id="comentario2" class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" id="fecha" class="form-control w-25">
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
    <div id="comentario"></div>
    `,script:()=>{const n=document.getElementById("codigoTicket"),a=document.getElementById("comentario2"),e=document.getElementById("fecha");document.getElementById("btnAñadirComentario").addEventListener("click",()=>{const c=n.textContent,t=e.value,o=a.value;console.log("Código:",c),console.log("Fecha:",t),console.log("Descripción:",o);const r={codigo:c,fecha:t,contenido:o,estado:"Pendiente"};m.push(r),console.log("bd actualizado:",m),document.querySelector("#comentario").innerHTML=b.template,b.script()}),document.getElementById("btnVolver").addEventListener("click",()=>{console.log("Volver a la vista anterior")})}},l={template:`
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      </tbody>
    </table>
    <div><button id="nou-ticket" class="btn btn-danger" title="Nuevo ticket">Nuevo ticket</button></div>
    
    `,script:()=>{let n="",a="";d.forEach(e=>{e.estado=="Pendiente"&&(n+=`
              <tr class="tarea">
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <td>
                      <button class="btn btn-success resolver" data-codigo="${e.codigo}" title="Resolver ticket">Resolver</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td> 
                      <div >
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${e.codigo}" title="Eliminar ticket">
                      <i class="bi bi-trash3"></i>
                    </button>
                    
                      </div>
                  </td>
              </tr>
              `),e.estado=="Resuelto"&&(a+=`
              <tr class="tarea">
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <td>
                      <button class="btn btn-success" title="Resolver ticket" disabled>Resuelto</button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="verComentario" class="btn btn-info" title="Ver comentarios">
                          <i class="bi bi-chat-left-text"></i>
                      </button>
                  </td>
                  <td>
                      <div class="tarea">
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${e.codigo}" title="Eliminar ticket">
  <i class="bi bi-trash3"></i>
</button>

                    </div>
                  </td>
              </tr>
              `)}),document.querySelector("#tablaPendiente").innerHTML=n,document.querySelector("#tablaResuelto").innerHTML=a,document.querySelectorAll(".resolver").forEach(e=>{e.addEventListener("click",()=>{const c=e.getAttribute("data-codigo"),t=d.find(o=>o.codigo===c);t&&(t.estado="Resuelto",l.script())})}),document.querySelector("#nou-ticket").addEventListener("click",()=>{document.querySelector("main").innerHTML=g.template,g.script()}),document.querySelectorAll("#verComentario").forEach(e=>{e.addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()})}),document.querySelectorAll("#comentarios").forEach(e=>{e.addEventListener("click",()=>{console.log("hola"),document.querySelector("main").innerHTML=h.template,h.script()})}),document.querySelectorAll(".eliminar").forEach(e=>{e.addEventListener("click",c=>{console.log("Eliminar Ticket - Evento de clic disparado");const t=e.getAttribute("data-codigo");console.log("codigoTicket",t);const o=d.findIndex(r=>r.codigo===t);console.log("index",o),o!==-1?(d.splice(o,1),console.log("Ticket eliminado:",t),console.log("Tickets actualizados:",d),l.script()):console.log("Ticket no encontrado en el array")})})}},g={template:`<div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span>123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
    <label for="codigo" class="form-label">Código: </label>
    <input type="text" class="form-control mb-3" id="codigo">

    <label for="fecha" class="form-label">Fecha: </label>
    <input type="date" class="form-control mb-3" id="fecha">

    <label for="aula" class="form-label">Aula: </label>
    <input type="text" class="form-control mb-3" id="aula">

    <label for="ordenador" class="form-label">Ordenador: </label>
    <input type="text" class="form-control mb-3" id="ordenador">

    <label for="descripcion" class="form-label">Descripción: </label>
    <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

    <label for="alumno" class="form-label">Alumno: </label>
    <input type="text" class="form-control mb-3" id="alumno">

    <label for="grupo" class="form-label">Grupo: </label>
    <input type="text" class="form-control mb-3" id="grupo">
    
   
    
    
    <div class="d-flex align-items-center">
        
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
    </div>
    </form>
    <div id="comentario"></div>
    `,script:()=>{document.getElementById("btnAñadirComentario").addEventListener("click",()=>{const n=document.getElementById("codigo").value,a=document.getElementById("fecha").value,e=document.getElementById("aula").value,c=document.getElementById("ordenador").value,t=document.getElementById("descripcion").value,o=document.getElementById("alumno").value,r=document.getElementById("grupo").value;console.log("Código:",n),console.log("Fecha:",a),console.log("Aula:",e),console.log("Ordenador:",c),console.log("Descripción:",t),console.log("Alumno:",o),console.log("Grupo:",r);const p={codigo:n,fecha:a,aula:e,grupo:r,ordenador:c,contenido:t,alumno:o,estado:"Pendiente"};d.push(p),console.log("bd actualizado:",m),document.querySelector("#comentario").innerHTML=l.template,l.script()})}},s=[],u={template:`
    <div class="container mt-5">
    <h1 class="text-center">Registro</h1>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form action="" class="form border shadow p-3">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input name="nombre" id="nombre" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="apellidos" class="form-label">Apellidos:</label>
                    <input id="apellidos" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input name="email" id="email" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contraseña:</label>
                    <input name="pass" id="pass" type="password" class="form-control" />
                </div>
                <a id="enviar" class="btn btn-primary w-100" href="#">Enviar</a>
            </form>
        </div>
    </div>
</div>

    `,script:()=>{document.querySelector("#enviar").addEventListener("click",n=>{n.preventDefault;const a=document.querySelector("#nombre").value,e=document.querySelector("#apellidos").value,c=document.querySelector("#email").value,t=document.querySelector("#pass").value;if(!a||!e||!c||!t){alert("Por favor, completa todos los campos obligatorios.");return}const o={nombre:a,email:c,contrasenya:t};if(s.length===0){s.push(o);const r=JSON.stringify(s);localStorage.setItem("BD",r),document.querySelector("main").innerHTML=i.template,i.script()}else s.forEach(r=>{if(r.email!=c)if(r.contrasenya!=t){s.push(o);const p=JSON.stringify(s);localStorage.setItem("BD",p),document.querySelector("main").innerHTML=i.template,i.script()}else alert("La contraseña ya esta en uso");else alert("Ese correo esta ya en uso")})})}},i={template:`
    <h1 class="mt-5 text-center">Inicia sesión</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="email" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input id="pass" type="password" class="form-control" />
            <div class="form-check mt-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Recordar sesión
                </label>
            </div>
            <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
            <a id="iniciarSesion" class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
        </form>
        <a id="registrox" class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
        >
    </div>
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",n=>{n.preventDefault;const a=localStorage.getItem("BD"),e=JSON.parse(a),c=document.querySelector("#email").value,t=document.querySelector("#pass").value;e.forEach(o=>{c==o.email?t==o.contrasenya?(alert("Has iniciado sesion correctamente"),document.querySelector("#nombreUsuario").innerHTML=c,document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block"),document.querySelector("main").innerHTML=l.template,l.script()):alert("La contraseña no es correcta"):alert("Este correo no esta registrado")})}),document.querySelector("#cerrarSesion").addEventListener("click",n=>{n.preventDefault,document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none"),document.querySelector("main").innerHTML=i.template,i.script()}),document.querySelector("#registrox").addEventListener("click",n=>{n.preventDefault,document.querySelector("main").innerHTML=u.template,u.script()})}},v={template:`
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
            <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
            <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
            <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
            
        </div>
        <div>
            <span id="nombreUsuario" class="d-none"></span>
            <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
        </div>
        </div>
    </nav>
    `,script:()=>{document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=l.template,l.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=i.template,i.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=u.template,u.script()})}};document.querySelector("header").innerHTML=v.template;v.script();document.querySelector("main").innerHTML=u.template;u.script();

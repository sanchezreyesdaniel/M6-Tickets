import { vistaLogin } from "../vistas/vistaLogin"
import { vistaPanel } from "../vistas/vistaPanel"
import { vistaRegistre } from "../vistas/vistaRegistre"

export const header = {
    template: //html
    `
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
    `,
    script:()=>{
        document.querySelector('#panel').addEventListener('click',()=>{
            document.querySelector('main').innerHTML=vistaPanel.template
            vistaPanel.script()
        })

        document.querySelector('#login').addEventListener('click',()=>{
            document.querySelector('main').innerHTML=vistaLogin.template
            vistaLogin.script()
        })

        document.querySelector('#registro').addEventListener('click',()=>{
            document.querySelector('main').innerHTML=vistaRegistre.template
            vistaRegistre.script()
        })
    }
}
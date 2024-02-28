import { header } from "../componentes/header"
import { vistaPanel } from "./vistaPanel"
import { vistaRegistre } from "./vistaRegistre"

export const vistaLogin = {
    template: //html
    `
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
    `,
    script:()=>{
        document.querySelector('#iniciarSesion').addEventListener('click',(event)=>{
            event.preventDefault
            const baseDatos= localStorage.getItem('BD')
            const objetoJson = JSON.parse(baseDatos)
            console.log(objetoJson)
            const correoElectronico = document.querySelector('#email').value
            const contrasenya = document.querySelector('#pass').value

            objetoJson.forEach(element => {
                if(correoElectronico == element.email){
                    if(contrasenya == element.contrasenya){
                        alert('Has iniciado sesion correctamente')
                        document.querySelector('#nombreUsuario').innerHTML=correoElectronico
                        document.querySelector('#nombreUsuario').classList.replace('d-none', 'd-inline-block'); 
                        document.querySelector('#cerrarSesion').classList.replace('d-none', 'd-inline-block'); 
                        document.querySelector('main').innerHTML=vistaPanel.template
                        vistaPanel.script()
                    }else{
                        alert('La contraseña no es correcta')
                    }
                }else{
                    alert('Este correo no esta registrado')
                }
            }); 
        })
        document.querySelector('#cerrarSesion').addEventListener('click',(event)=>{
            event.preventDefault
            document.querySelector('#nombreUsuario').classList.replace('d-inline-block', 'd-none'); 
            document.querySelector('#cerrarSesion').classList.replace('d-inline-block', 'd-none'); 
            document.querySelector('main').innerHTML=vistaLogin.template
            vistaLogin.script()
        })

        document.querySelector('#registrox').addEventListener('click',(event)=>{
            event.preventDefault
            document.querySelector('main').innerHTML=vistaRegistre.template
            vistaRegistre.script()
        })
    }
}
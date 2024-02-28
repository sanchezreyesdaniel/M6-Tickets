import { header } from "./componentes/header";
import { vistaLogin } from "./vistas/vistaLogin";
import { vistaPanel } from "./vistas/vistaPanel";
import { vistaRegistre } from "./vistas/vistaRegistre";

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = vistaRegistre.template
vistaRegistre.script()


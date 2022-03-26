import * as moment from "moment";
import { Enlace } from "./Enlace";

export class Actividad {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaBaja?:  moment.Moment;
    mostrar?: boolean;
    texto: string;
    file?: File;
    listEnlaces?: Enlace[];

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
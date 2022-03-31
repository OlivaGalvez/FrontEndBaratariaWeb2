import * as moment from "moment";
import { EnlaceActividad } from "./EnlaceActividad";

export class Convenio {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    mostrar?: boolean;
    file?: File;
    enlace?: EnlaceActividad;

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
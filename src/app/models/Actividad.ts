import * as moment from "moment";
import { Documento } from "./Documento";
import { EnlaceActividad } from "./EnlaceActividad";

export class Actividad {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaBaja?:  moment.Moment;
    mostrar?: boolean;
    texto: string;
    file?: File;
    listEnlaces?: EnlaceActividad[];
    listDocumentos?: Documento[];

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
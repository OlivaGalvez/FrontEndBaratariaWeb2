import * as moment from "moment";
import { Documento } from "./Documento";
import { DireccionWeb } from "./DireccionWeb";

export class Actividad {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaInicio:  moment.Moment;
    fechaFin?:  moment.Moment;
    mostrar?: boolean;
    importeSocio?: number;
    importeNoSocio?: number;
    texto: string;
    file?: File;
    listEnlaces?: DireccionWeb[];
    listDocumentos?: Documento[];

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
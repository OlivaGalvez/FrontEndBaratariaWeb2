import * as moment from "moment";
import { Documento } from "./Documento";
import { DireccionWeb } from "./DireccionWeb";

export class Convenio {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaInicio:  moment.Moment;
    fechaFin?:  moment.Moment;
    mostrar?: boolean;
    texto: string;
    file?: File;
    listEnlaces?: DireccionWeb[];
    listDocumentos?: Documento[];

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
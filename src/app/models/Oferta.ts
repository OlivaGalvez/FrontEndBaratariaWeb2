import * as moment from "moment";
import { Documento } from "./Documento";

export class Oferta {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaInicio:  moment.Moment;
    fechaFin?:  moment.Moment;
    mostrar?: boolean;
    file?: File;
    listDocumentos?: Documento[];

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
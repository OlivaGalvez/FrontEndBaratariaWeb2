import * as moment from "moment";

export class Enlace {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    mostrar?: boolean;
    file?: File;
    url: string;

    imagenServidor?: string;
    imagenServidorBase64?: string;
}
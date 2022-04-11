import * as moment from "moment";
import { Documento } from "./Documento";

export class Asociacion {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    texto: string;
    listDocumentos?: Documento[];
}
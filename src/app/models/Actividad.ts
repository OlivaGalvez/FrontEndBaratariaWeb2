import * as moment from "moment";

export class Actividad {
    id?: number;
    titulo: string;
    fechaAlta:  moment.Moment;
    fechaBaja?:  moment.Moment;
}
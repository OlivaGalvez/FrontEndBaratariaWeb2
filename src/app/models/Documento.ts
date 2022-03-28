import { NumericLiteral } from "typescript";
import { EnlaceActividad } from "./EnlaceActividad";

export class Documento {
    id?: number;
    actividadId?: number;
    socioId?: number;
    nombre: string;
    original: string;
    servidor: string;
    fecha?:  moment.Moment;
    privado?: boolean;
    tamanio?: string;

    file?: File;
}
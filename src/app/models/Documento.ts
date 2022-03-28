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

    file?: File;
}
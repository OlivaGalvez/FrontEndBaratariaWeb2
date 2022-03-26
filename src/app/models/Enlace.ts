import { BaseModel } from "../_metronic_gestion/shared/crud-table";

export interface Enlace extends BaseModel {
    id: number;
    nombre: string;
    ruta: string;
}
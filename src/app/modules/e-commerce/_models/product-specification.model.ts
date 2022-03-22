import { BaseModel } from '../../../_metronic_portal/shared/crud-table';

export interface ProductSpecification extends BaseModel {
  id: number;
  carId: number;
  specId: number;
  specName: string;
  value: string;
}

import { props, createAction } from '@ngrx/store';
import { Service } from 'src/app/models/service';

export const LoadServices = createAction('[Services] Load Services');
// tslint:disable-next-line: max-line-length
export const LoadServicesSuccess = createAction('[Services] set Services success', props<{ services: Service[] }>());
export const AddServices = createAction('[Services] add Services', props<{ services: Service }>());
export const DeleteServicesl = createAction('[Services] delete Services', props<{ id: number }>());


import { Action, createReducer, on } from '@ngrx/store';
import { Service } from 'src/app/models/service';
import { LoadServicesSuccess } from './services.actions';


export const servicesFeatureKey = 'services';

export type State = Service[];
export const initialState: State = [];

const servicesAllReducer = createReducer(initialState,
  on(LoadServicesSuccess, (state: State, { services }) => {
    return services;
  }),
);

export function servicesReducer(state: State | undefined, action: Action) {
  return servicesAllReducer(state, action);
}


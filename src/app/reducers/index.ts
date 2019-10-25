import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Service } from '../models/service';
import { servicesReducer } from '../pages/services/state/services.reducer';

export interface IEntittyState<T> {
  isLoading: boolean;
  data: T[];
  entities: { [key: string]: T };
}

export interface IRootState {
  services: Service[];
}

export const reducers: ActionReducerMap<IRootState> = {
  services: servicesReducer,
};



export const metaReducers: MetaReducer<IRootState>[] = !environment.production ? [] : [];

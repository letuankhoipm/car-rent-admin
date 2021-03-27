import { LoggedUser } from './../../models/logged-user.model';
import * as StateActions from '../actions/auth.action';

export type Action = StateActions.All;

export interface ConfigurationState {
    configuration: any;
}

export interface State {
  id: number,
  accessToken: string,
  expiresIn: string,
  fName: string,
  imagePath: string,
  name: string,
  role: string,
  tokenType: string,
  token: string
}

export const initialState: LoggedUser = {
   id: null,
   accessToken: null,
   expiresIn: null,
   fName: null,
   imagePath: null,
   name: null,
   role: null,
   tokenType: null,
   token: null
};

export function reducer(state = initialState, action: StateActions.All): any {
    switch (action.type) {
        case StateActions.LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                accessToken: action.payload.accessToken,
                expiresIn: action.payload.expiresIn,
                fName: action.payload.fName,
                imagePath: action.payload.imagePath,
                name: action.payload.name,
                role: action.payload.role,
                tokenType: action.payload.tokenType
            };
        case StateActions.LOGIN_FAILURE:
            return { ...state, ...action.payload };
        case StateActions.LOGOUT:
            return {
                ...state,
                id: null,
                accessToken: null,
                expiresIn: null,
                fName: null,
                imagePath: null,
                name: null,
                role: null,
                tokenType: null,
                token: null };
        case StateActions.REGISTRATIONING:
            return { ...state, isAuthenticated: false, user: null, token: null, registrationing: true, error: '' };
        case StateActions.REGISTRATION_SUCCESS:
            return {
                ...state, isAuthenticated: true, token: action.payload.token
            };
        case StateActions.REGISTRATION_FAILURE:
            return { ...state, ...action.payload, registrationing: false, token: null };
        default:
            return state;
    }
}

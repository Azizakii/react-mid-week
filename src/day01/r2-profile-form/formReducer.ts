import { validateName, validateEmail } from "./validators";

export type Role = 'user' | 'admin' | 'editor';

export interface ProfileState {
    name: string,
    email: string,
    role: Role,
    subscribe: boolean,
    touched: {name: boolean, email: boolean};
    errors: {name: string | null; email: string | null}
}

export type ProfileAction = 
| {type: 'change_name'; payload: string}
| {type: 'change_email'; payload: string}
| {type: 'change_role'; payload: Role}
| {type: 'toggle_subscribe'}
| {type: 'blur_name'}
| {type: 'blur_email'}
| {type: 'validate_all'}
| {type: 'reset'}

export const initialState: ProfileState = {
    name: '',
    email: '',
    role: 'user',
    subscribe: true,
    touched: {name: false, email: false},
    errors: {name: null, email: null}
}

export function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {

    switch(action.type) {
        case 'change_name':
            return {...state, name: action.payload, errors: {...state.errors, name: validateName(action.payload.trim())}}
        case 'change_email':
            return {...state, email: action.payload, errors: {...state.errors, email: validateEmail(action.payload.trim())}}
        case 'change_role':
            return {...state, role: action.payload}
        case 'toggle_subscribe':
            return {...state, subscribe: !state.subscribe}
        case 'blur_name':
            return {...state, touched: {...state.touched, name: true} }
        case 'blur_email':
            return {...state, touched: {...state.touched, email: true} }
        case 'validate_all': {
            const newEmail = validateEmail(state.email.trim())
            const newName = validateName(state.name.trim())
            return {...state, touched: {name: true, email: true}, errors: {name: newName, email: newEmail}}
        }
        case 'reset':
            return initialState
        default: 
            return state
    }
}
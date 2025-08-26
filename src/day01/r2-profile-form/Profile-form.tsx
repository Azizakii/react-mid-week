import { useReducer } from "react";
import { validateName, validateEmail } from "./validators";
import { initialState, profileReducer, type Role } from "./formReducer";

export const ProfileForm = () => {
	const [state, dispatch] = useReducer(profileReducer, initialState);

	return (
		<form>
			<label htmlFor="name">Name</label>
			<input
				value={state.name}
				onChange={(e) => {
					dispatch({ type: "change_name", payload: e.target.value });
				}}
				onBlur={() => {
					dispatch({ type: "blur_name" });
				}}
				type="text"
				id="name"
				placeholder="Name"
			/>

			<label htmlFor="email">Email</label>
			<input
				value={state.email}
				onChange={(e) => {
					dispatch({ type: "change_email", payload: e.target.value });
				}}
				onBlur={() => {
					dispatch({ type: "blur_email" });
				}}
				type="text"
				id="email"
				placeholder="Email"
			/>

			<label htmlFor="role">Role</label>
			<select onChange={(e) => {dispatch({type: 'change_role', payload: e.target.value as Role})}} name="role" id="role">
				<option value="user">User</option>
				<option value="admin">Admin</option>
				<option value="editor">Editor</option>
			</select>

			<label htmlFor="checkbox">Subscribe</label>
			<input checked={state.subscribe} onChange={() => dispatch({type: 'toggle_subscribe'})} type="checkbox" />

			<button onClick={() => dispatch({type: 'validate_all'})}>Save</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
		</form>
	);
};

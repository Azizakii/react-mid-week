import { useReducer } from "react";
import { initialState, profileReducer, type Role } from "./formReducer";
import styles from './ProfileForm.module.scss'

export const ProfileForm = () => {
	const [state, dispatch] = useReducer(profileReducer, initialState);

	return (
		<form className={styles.form}>
			<label className={styles.label} htmlFor="name">Name</label>
			<input className={styles.input}
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
            {state.touched.name && state.errors.name && (
                <p className={styles.p}>{state.errors.name}</p>
            )}

            <br />

			<label htmlFor="email">Email</label>
			<input className={styles.input}
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
            {state.touched.email && state.errors.email && (
                <p className={styles.p}>{state.errors.email}</p>
            )}

            <br />

			<label className={styles.label} htmlFor="role">Role</label>
			<select className={styles.select} onChange={(e) => {dispatch({type: 'change_role', payload: e.target.value as Role})}} name="role" id="role">
				<option value="user">User</option>
				<option value="admin">Admin</option>
				<option value="editor">Editor</option>
			</select>



            <br />

			<label className={styles.label} htmlFor="checkbox">Subscribe</label>
			<input className={styles.input} checked={state.subscribe} onChange={() => dispatch({type: 'toggle_subscribe'})} type="checkbox" />

            <br />

			<button className={styles.button} onClick={() => dispatch({type: 'validate_all'})}>Save</button>
            <button className={styles.button} onClick={() => dispatch({type: 'reset'})}>Reset</button>
		</form>
	);
};

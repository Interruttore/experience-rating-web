import React from "react";

const Signup = () => {
	return (
		<div>
			<form>
				<h2>SignUp</h2>
				<label htmlFor="username">Username or email:</label>
				<input type="text" name="username"></input>
				<label htmlFor="password">Password:</label>
				<input type="password" name="password"></input>
				<button type="submit">SignUp</button>
			</form>
		</div>
	);
};

export default Signup;

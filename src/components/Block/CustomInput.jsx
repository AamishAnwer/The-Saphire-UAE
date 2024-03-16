import React from "react";

const CustomInput = ({ value, onChange, placeholder, ...rest }) => {
	return (
		<input
			required
			type="text"
			{...rest}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className=" border-solid border-2 rounded-lg border-black p-2 min-w-full"
		/>
	);
};

export default CustomInput;

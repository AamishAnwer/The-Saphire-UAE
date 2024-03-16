import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const CustomUpload = ({ onChange, onDrop, setFileObj, ...rest }) => {
	const [selectedFileName, setSelectedFileName] = useState("");

	const handleFileChange = (e) => {
		const selectedFile =
			e.target.files[0] || (e.dataTransfer && e.dataTransfer.files[0]);
		setFile(selectedFile);
		setFileObj(selectedFile);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		const selectedFile = e.dataTransfer.files[0];
		setFile(selectedFile);
		onChange && onChange(selectedFile);
		setSelectedFileName(selectedFile ? selectedFile.name : "");
	};

	const setFile = (file) => {
		setSelectedFileName(file ? file.name : "");
		onChange && onChange(file);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			className="flex flex-1 flex-col pr-0 md:pr-10"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			<input
				type="file"
				onChange={handleFileChange}
				className="hidden"
				id="fileInput"
				accept=".stl, .stb, .obj, .fbx, .jpeg, .jpg"
				{...rest}
			/>

			<label
				className={`border bg-[#0088d6] border-solid border-[#] p-2 flex items-center font-light text-white justify-between cursor-pointer ${
					selectedFileName ? "border-[#0088d6] bg-blue-800" : ""
				}`}
				htmlFor="fileInput"
			>
				<span className="flex w-full flex-row justify-between px-2 py-2 border-2 border-white border-dashed">
					<span className="flex flex-grow-1 md:text-xl text-sm  font-semibold">
						{selectedFileName || "Attach File* or Drag your File Here"}
					</span>
					<MdOutlineFileUpload className="mr-2 " />
				</span>
			</label>

			<p className="text-xs font-light mt-2">
				<strong className="font-medium">Max File Size:</strong> 100MB
				<br />
				<strong className="font-medium">
					Recommended 3D File formats:
				</strong>{" "}
				STL, STB, OBJ, FBX, JPEG, JPG. For files over 100MB, send files to{" "}
				<a
					href="mailto:info@ultratec3d.ae"
					className="text-[##0088d6] underline"
				>
					info@ultratec3d.ae
				</a>
			</p>
		</div>
	);
};

export default CustomUpload;

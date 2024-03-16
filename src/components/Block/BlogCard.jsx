import React from "react";

const BlogCard = ({ title, date, description, imageUrl, readMoreLink }) => {
	return (
		<div className="max-w-lg mx-auto px-4 bg-white rounded-lg overflow-hidden shadow-lg ">
			<img
				src={imageUrl}
				alt="Blog Image"
				className="w-full h-48 object-cover rounded"
			/>

			<div className="p-6">
				<h2 className="text-2xl font-normal mb-3">{title}</h2>
				<p className="text-gray-500 text-sm mb-2">{date}</p>
				<p className="text-gray-700 mb-4 mt-16">{description}</p>
			</div>
		</div>
	);
};

export default BlogCard;

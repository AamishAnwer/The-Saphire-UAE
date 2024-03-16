"use client";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
	gtmId: "GTM-K72KFHDB",
};

const GTM = () => {
	useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);

	return <div>GTM</div>;
};

export default GTM;

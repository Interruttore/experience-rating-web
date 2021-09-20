import { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";

const useDidMountEffect = (func, deps) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, [deps]);
};

export default useDidMountEffect;

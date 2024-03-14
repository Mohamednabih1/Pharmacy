// "use client";
// import { useEffect, useState } from "react";
// import { SizeObject } from "@/data/types";

// // Hook
// export default function useWindowSize(): SizeObject {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSizeWidth, setWindowSizeWidth] = useState(0);
//   const [windowSizeHeight, setWindowSizeHeight] = useState(0);

//   useEffect(() => {
//     // only execute all the code below in client side
//     // Handler to call on window resize
//     function handleResize() {
//       // Set window width/height to state
//       setWindowSizeWidth((e) => (e = window.innerWidth));
//       setWindowSizeHeight((e) => (e = window.innerHeight));
//     }

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Call handler right away so state gets updated with initial window size
//     handleResize();

//     // Remove event listener on cleanup
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Empty array ensures that effect is only run on mount

//   const retVal: SizeObject = {
//     width: windowSizeWidth,
//     height: windowSizeHeight,
//   };

//   return retVal;
// }

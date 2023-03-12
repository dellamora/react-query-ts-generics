// import { useState, useEffect } from "react";

// export default function useDebounce(callback, delay, dependencies) {
//   const [debouncedCallback, setDebouncedCallback] = useState(() => () => {});

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       callback();
//       setDebouncedCallback(() => () => {});
//     }, delay);
//     setDebouncedCallback(() => () => clearTimeout(timeoutId));
//   }, [...dependencies, callback, delay]);

//   return debouncedCallback;
// }

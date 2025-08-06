import React from 'react'
import { useState } from "react";

//5.shouldComponentUpdate() ⟶ React.memo()
//Prevents re-render if props haven’t changed
export default React.memo(function functionComponent({ userId }) {

    //1.constructor() ⟶ useState()
    const [count, setCount] = useState(0); // state initialization

    // ----------------------------------------------------------------------------------

    // Snapshot before update
    const listRef = useRef();
    const prevHeight = useRef(0);

    // ----------------------------------------------------------------------------------

    //2.componentDidMount() ⟶ useEffect(() => {}, [])
    //Runs only once when component mounts
    useEffect(() => {

        console.log("Component mounted");
        // fetch data etc.


        // 4.componentWillUnmount() ⟶ useEffect cleanup
        // Runs when component is about to unmount
        const interval = setInterval(() => {
            console.log("Running timer...");
        }, 1000);
        // Cleanup function
        return () => {
            clearInterval(interval);
            console.log("Component unmounted, timer cleared");
        };

    }, []);

    // ----------------------------------------------------------------------------------

    // 6.getSnapshotBeforeUpdate() ⟶ useRef + useEffect
    // Save previous value or scroll position before update
    useEffect(() => {
        // Snapshot before update
        prevHeight.current = listRef.current.scrollHeight;
    }, [userId]);

    // ----------------------------------------------------------------------------------

    // 3.componentDidUpdate() ⟶ useEffect(() => { }, [dependency])
    // Runs when dependency(state or props) changes
    useEffect(() => {
        console.log("userId changed, fetch data");
        listRef.current.scrollTop =
            listRef.current.scrollHeight - prevHeight.current;
        // fetch new user data
    }, [userId]);

    // ----------------------------------------------------------------------------------

    return (
        <div>
            <p>Count: {count}</p>
            <div>User ID: {userId}</div>
            <div id="chat" ref={listRef} style={{ height: 200, overflowY: "auto" }}></div>
        </div>
    );
})

// ----------------------------------------------------------------------------------

// Bilkul bhai! Ab wahi class component ke lifecycle methods ko hum function component me kaise likhte hain, wo samjhte hain — React Hooks ke through.

// Function component me useEffect, useState, aur other hooks ke through lifecycle handle kiya jaata hai.

// 🧠 Sabse Pehle: Lifecycle mapping
// Class Lifecycle Method	Function Component Equivalent
// constructor()	useState()
// componentDidMount()	useEffect(() => {}, [])
// componentDidUpdate()	useEffect(() => {}, [dependency])
// componentWillUnmount()	useEffect(() => { return () => {} }, [])
// shouldComponentUpdate()	React.memo() (optional)
// getDerivedStateFromProps()	props → useEffect / useMemo
// getSnapshotBeforeUpdate()	useRef + useEffect combo

// ----------------------------------------------------------------------------------

// Summary (Simple Bhasha me)
// Class Component	Function Component
// constructor()	useState()
// componentDidMount()	useEffect(() => {}, [])
// componentDidUpdate()	useEffect(() => {}, [dep])
// componentWillUnmount()	useEffect(... return () => {})
// shouldComponentUpdate()	React.memo()

// ----------------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";

// function LifecycleDemo({ userId }) {
//   const [data, setData] = useState(null);

//   // componentDidMount
//   useEffect(() => {
//     console.log("Mounted");
//   }, []);

//   // componentDidUpdate (userId ke liye)
//   useEffect(() => {
//     console.log("userId changed:", userId);
//     fetch(`https://api.example.com/user/${userId}`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [userId]);

//   // componentWillUnmount
//   useEffect(() => {
//     return () => {
//       console.log("Cleanup before unmount");
//     };
//   }, []);

//   return <div>{data ? data.name : "Loading..."}</div>;
// }




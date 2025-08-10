import { count } from 'firebase/firestore';
import React, { Component } from 'react'

export default class classComponent extends Component {

    // Kab chalta hai?
    // Component jab first time create ho raha hota hai.

    // Use Case:
    // State initialize karna

    // Event bindings karna (agar needed ho)
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            color: "red"
        }
    }

    // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Jab component mount ya update ho raha ho.

    // Use Case:
    // Props ke basis pe state ko sync karna (rarely needed)

    // Controlled component me
    static getDerivedStateFromProps(props, state) {
        if (props.newColor !== state.color) {
            return { color: props.newColor };
        }
        return null;
    }

     // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Mounting & Updating dono mein.

    // Use Case:
    // Purely UI dikhane ke liye

    // JSX return karta hai
    render() {
        return (
            <div>classComponent</div>
        )
    }

     // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Jab component DOM me aa chuka ho.

    // Use Case:
    // API call karna

    // DOM access karna

    // Event listener lagana
    componentDidMount() {
        fetch('https://api.example.com/data')
            .then(res => res.json())
            .then(data => this.setState({ ...data, count: this.state.count, color: "red" }));
    }

 // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Jab component update hone wala ho (state ya props badle)

    // Use Case:
    // Performance optimization (re-render avoid karna)
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true; // re-render karo
        }
        return false; // re-render mat karo
    }

 // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // render() ke baad aur componentDidUpdate() se just pehle.

    // Use Case:
    // Scroll position save karna

    // DOM ka data snapshot lena
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.list.length < this.props.list.length) {
            const list = document.getElementById("list");
            return list.scrollHeight;
        }
        return null;
    }

 // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Update hone ke baad

    // Use Case:
    // API call on state/props change

    // DOM update ke baad kaam
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const list = document.getElementById("list");
            list.scrollTop = list.scrollHeight - snapshot;
        }
        this.interval = setInterval(() => {
            console.log("Timer running");
        }, 1000);
    }

 // ----------------------------------------------------------------------------------

    // Kab chalta hai?
    // Jab component screen se hata diya jaata hai

    // Use Case:
    // Cleanup: timer clear, event listener remove

    // Memory leak avoid karna
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("Component removed");
    }

}

 // ----------------------------------------------------------------------------------

// Full Flow Recap with Real Use:
// Mounting:
// 🔹 constructor()
// 🔹 getDerivedStateFromProps()
// 🔹 render()
// 🔹 componentDidMount()

// Updating:
// 🔹 getDerivedStateFromProps()
// 🔹 shouldComponentUpdate()
// 🔹 render()
// 🔹 getSnapshotBeforeUpdate()
// 🔹 componentDidUpdate()

// Unmounting:
// 🔹 componentWillUnmount()

 // ----------------------------------------------------------------------------------

// Ek Line Me Yaad Karne Ka Tarika:
// Mount: constructor → getDerivedStateFromProps → render → componentDidMount
// Update: getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
// Unmount: componentWillUnmount

 // ----------------------------------------------------------------------------------

// 🔄 Summary Table
// Phase	Lifecycle Methods
// Mounting	constructor(), getDerivedStateFromProps(), render(), componentDidMount()
// Updating	getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
// Unmounting	componentWillUnmount()

 // ----------------------------------------------------------------------------------

// Agar tu sirf 4 most useful lifecycle methods yaad rakhe to kaafi hai:

// constructor() – state set

// componentDidMount() – data fetch

// componentDidUpdate() – state/props change ke baad

// componentWillUnmount() – cleanup

 // ----------------------------------------------------------------------------------

// Teen Major Phases
// Phase	Matlab kya hota hai?
// -------------------------------

// 1. Mounting	Component ban raha hai (screen pe aane ke process me)
// 2. Updating	Component update ho raha hai (props/state change se)
// 3. Unmounting	Component hata diya ja raha hai (screen se gayab)
// ------------------------------------------------------------------------

// 1. Mounting Phase (Jab component first time load ho raha ho)
// Method	Kya karta hai
// constructor()	Component ka initial setup yahan hota hai (state initialize, etc)
// static getDerivedStateFromProps()	Props se state banana ho to yahan hota hai. Rarely used.
// render()	JSX return karta hai (UI dikhane ke liye)
// componentDidMount()	Jab component screen pe aa jata hai. API call yahin karte hain.

// Sabse important yahan: render() aur componentDidMount()
// -------------------------------------------------------------------

// 2. Updating Phase (Jab props ya state change ho jaaye)
// Method	Kya karta hai
// static getDerivedStateFromProps()	(Same as above)
// shouldComponentUpdate()	Return true/false: kya re-render karna chahiye ya nahi?
// render()	JSX fir se banega
// getSnapshotBeforeUpdate()	DOM change hone ke just pehle kuch lena ho to yahan.
// componentDidUpdate()	DOM update ho chuka hai, ab kuch kaam karna ho (jaise API call)

// Most common: componentDidUpdate()
// -------------------------------------------------------------------------------------

// 3. Unmounting Phase (Jab component screen se hata diya jaata hai)
// Method	Kya karta hai
// componentWillUnmount()	Cleanup yahan karte hain (like: timers, event listeners, API abort etc.)

// 👉 Sabse important: componentWillUnmount()




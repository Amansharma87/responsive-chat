import {icons} from "../utils";
import React, {useEffect, useState} from "react";

const Footer = ({handleSubmit}) => {
    const [state, setState] = useState(null);
    const [randomKey,setRandomKey] = useState("sljkdhcij")

    useEffect(()=>{
        // let input  = document.getElementById("input");
        // input.addEventListener("keydown", function(event) {
        //     event.stopImmediatePropagation();
        //     console.log(event.key)
        //     // If the user presses the "Enter" key on the keyboard
        //     if (event.key === "Enter") {
        //         // Cancel the default action, if needed
        //         event.preventDefault();
        //         // Trigger the button element with a click
        //         document.getElementById("enter-btn").click();
        //     }
        // });


    },[])

    return (
        <>
            <div className={"footer-box d-flex align-center justify-space-between"}>
                <div className={"input-container"}>
                    <input
                        id={"input"}
                        key={randomKey}
                        defaultValue={state}
                        onChange={(e) => {
                            setState(e.target.value);
                        }}
                        placeholder={"Start typing your messaging here..."}
                        className={"input-box"}/>
                    <img id={"enter-btn"} onClick={() => {
                        if(state) {
                            handleSubmit(state);
                            setState(null);
                            setTimeout(() => {
                                setRandomKey(new Date().getMilliseconds());
                            }, 0)
                        }
                    }} alt={"Send"} src={icons.Send}/>
                </div>
                <div className={"d-flex footer-icons"}>
                    <img alt={"Speaker"} src={icons.Speaker}/>
                    <img alt={"Mic"} src={icons.Mic}/>
                    <img alt={"Reload"} src={icons.Reload}/>
                    <img alt={"Copy"} src={icons.Copy}/>
                </div>
            </div>
        </>
    )
}
export default React.memo(Footer);

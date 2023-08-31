import React from 'react';
import {icons} from "../utils";

const Header = ({showAvatar}) => {
    return (
        <>
            <div className={"header d-flex align-center justify-space-between flex-wrap"}>
                <div className={"d-flex align-center"}>
                    <div className={"avatar-profile"}>
                        <img alt={"SRKProfile"} src={icons.SRKProfile}/>
                        <img alt={"ChatIcon"} className={"icon"} src={icons.ChatIcon}/>
                        <img alt={"UserProfile"} className={"user"} src={icons.UserProfile}/>
                    </div>
                    <h1>Interaction with Shahrukh's Licensed AI Persona</h1>
                </div>
                <div className={"d-flex justify-space-between section2-conatiner"}>
                    <div className={"checkbox-wrapper-22 d-flex align-center"}>
                        <label className="switch" htmlFor="checkbox">
                            <input onChange={(e)=>{
                                showAvatar(e.target.checked)
                            }} type="checkbox" id="checkbox"/>
                            <div className="slider round"></div>
                        </label>
                        <div className={"check-box-label"}>Avatar</div>
                    </div>
                    <div className={"end-chat-btn"}>
                        <button className={"d-flex align-center justify-center"}>
                            <img alt={"ChatIcon"} src={icons.ChatIcon}/>
                            End Chat Session
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default React.memo(Header);

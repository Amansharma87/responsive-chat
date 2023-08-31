import {icons} from "../utils";
import React, {useEffect} from "react";

const Chats = ({chatArray}) => {

    useEffect(()=>{
        let n = document.getElementById("chats")
        n.scrollTo(0,document.body.scrollHeight);
    },[])
    return (
        <div id={"chats"} style={{overflow:"auto",marginBottom:"10px"}}>
            {chatArray.map((item)=>{
                return(
                    <>
                        <div className={"d-flex"}>
                            <div className={"answer-box d-flex"}>
                                <img alt={"SrkChatAv"} src={icons.SrkChatAv}/>
                                {item.answer}
                            </div>
                            <div className={"d-flex actions justify-start"}>
                                <img alt={"Share"} src={icons.Share}/>
                                <img alt={"Like"} src={icons.Like}/>
                                <img alt={"DisLike"} src={icons.DisLike}/>
                            </div>

                        </div>
                        <div className={"question-box d-flex"}>
                            <img alt={"UserProfile"} src={icons.UserProfile}/>
                            {item.question}
                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default React.memo(Chats);

import './index.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Chats from "./components/Chats";
import {useState} from "react";
import BgImage from "../../assets/images/srk-avatar.png"

const ChatScreen = () => {

    const [avatarVisible,setAvatar] = useState(false)
    const [chatArray, setChatArray] = useState([
        {
            question: "Who are some of your favourite directors to work with?",
            answer: "I share a very special bond with Karan. We have worked together in several blockbusters like Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham', and 'My Name is Khan'. His ability to handle complex human relationships in films is outstanding."
        },
        {
            question: "Who are some of your favourite directors to work with?",
            answer: "I share a very special bond with Karan. We have worked together in several blockbusters like Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham', and 'My Name is Khan'. His ability to handle complex human relationships in films is outstanding."
        }
    ]);

    const handleSubmit = (question) => {
        let n = [...chatArray]
        n.push({
            question: question,
            answer: "I share a very special bond with Karan. We have worked together in several blockbusters like Kuch Kuch Hota Hai', 'Kabhi Khushi Kabhie Gham', and 'My Name is Khan'. His ability to handle complex human relationships in films is outstanding."
        })
        console.log(n)
        setChatArray(n);
        setTimeout(()=>{
            let chats = document.getElementById("chats")
            chats.scrollTo(0,document.body.scrollHeight);
        },0)
    }


    return (
        <div className={"container"}>
            <Header showAvatar={(value)=>{setAvatar(value)}}/>
            <div key={avatarVisible} className={"chat-body d-flex justify-end flex-column"} style={{backgroundImage:avatarVisible?`url(${BgImage})`:"transparent"}}>
                <Chats chatArray={chatArray}/>
                <Footer handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}
export default ChatScreen;

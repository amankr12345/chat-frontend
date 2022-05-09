import { useState } from "react"
import ChannelList from "./channelList"
import './chat.scss'


const Chat =()=>{
    const [channels,setChannel]=useState([
        {id:1,Name:'firstchannel',Participants:10},
        {id:2,Name:'secondchannel',Participants:10}
    ])
    return(
        <>
             <div className="chat-app">
                 <ChannelList channels={channels}/>
             </div>
        </>
    )
}

export default Chat
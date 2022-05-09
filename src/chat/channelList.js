import Channel from "./channel"

const ChannelList=({channels})=>{
    return(
        <>
            <div className='channel-list'>
            {
                    channels.map(channel=><Channel
                                            key={channel.id}
                                            channel={channel}/>
                                )
                }        

            </div>
            
            
        </>
    )
}

export default ChannelList
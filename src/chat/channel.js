

const Channel=({channel:{Name,Participants}})=>{
    return(
        <>
            <div className='channel-item'>
                <span>{Name}</span>
                <span>{Participants}</span>

            </div>
        </>
    )
}
export default Channel
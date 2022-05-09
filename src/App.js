import socketClient  from 'socket.io-client'
import ChannelList from './chat/channelList'
import Chat from './chat/chat'
const SERVER = "http://localhost:8080"

function App() {


  let socket = socketClient(SERVER)
  socket.on('connection',()=>{
    console.log('client connected to backend')
  })
  return (
      <>
      <Chat/>
      
      </>
  )
}

export default App;

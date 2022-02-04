import './App.css';

function Userlist () {
  return (
    <div className="userlist">
    </div>
  )
}

function Chat () {
  return (
    <div className="chat">
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox">
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <text class="Username">Username</text>
    <Userlist/>
    <Chat/>
    <input type="text" placeholder="Message.."></input>
    <a class="active" href="javascript:alert('Your message was send.')">Send</a>
    <Inputbox/>
    </div>
  );
}

export default App;

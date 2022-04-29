import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home.js'
import Profile from './Profile';
import Friends from './Friends';
import Chat  from './Chat';
import FriendProfile from './FriendProfile';
import PrivateChat from './PrivateChat';
import { useAuthStateContext, LoginComponent } from './context/FirebaseAuthContextProvider';
import ChatStateProvider from "./context/FirebaseChatContextProvider";


function Router()
{   
    const { authState } = useAuthStateContext();

  if (authState && authState.state === "AUTHENTICATION_LOADING") {
    return <div>Loading...</div>;
  }
  else if (authState && authState.state === "AUTHENTICATED") {
    return (
        <ChatStateProvider self={authState.user}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="/group" element={<Chat />}/>
              <Route path="/privatechat/:uid" element={<PrivateChat />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="/friends" element={<Friends />}/>
              <Route path="/friend/:uid" element={<FriendProfile />}/>
              <Route path="/" element={<Profile />}/>
            </Routes>
          </BrowserRouter>
        </ChatStateProvider>
      );
  } else {
    return <LoginComponent/>;
  }
}

export default Router;
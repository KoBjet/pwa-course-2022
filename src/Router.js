import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home'
import App from './App'
import Profile from './Profile';
import MiniGame from './MiniGame';
import Friend from './Friend';

function Router()
{
    return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="/app" element = {<App/>}/>
           <Route path="/profile" element = {<Profile/>}/>
           <Route path="/minigame" element = {<MiniGame/>}/>
           <Route path="/friend" element = {<Friend/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default Router;
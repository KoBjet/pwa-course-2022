import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home'
import App from './App'
import Profile from './Profile';
import MiniGame from './MiniGame';

function Router()
{
    return(
       <BrowserRouter>
       <Routes>
           <Route path="/" element = {<Home/>}/>
           <Route path="/app" element = {<App/>}/>
           <Route path="/profile" element = {<Profile/>}/>
           <Route path="/minigame" element = {<MiniGame/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default Router;
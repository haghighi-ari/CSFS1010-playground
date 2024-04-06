import { Routes, Route, Outlet, Link } from "react-router-dom";
import Playground from "./Playground";
import David from "./David";
import MuiArash from "./MUIArash";
import MUIMeow from "./MUIMeow";
import MUI3 from "./MUI3";
import MUIPaper from "./MUIPaper";
import useLights from "./useLights";
import { useLocation } from 'react-router-dom';


function App() {
    const { lightsOn, Title, toggleLights } = useLights()
    const location = useLocation()
    return <div>
        { <div>Lights are {lightsOn ? 'off': 'on'}</div>}
        <Title />
        <h1>{location.pathname}</h1>
    <nav>
        <ul>
            <li>
                <Link to="/playground">Playground</Link>    
            </li>
            <li>
                <Link to="/arash">Arash</Link>    
            </li>
            <li>
                <Link className={location.pathname === "/meow" ? 'active': 'inactive'} to="/meow">Meow</Link>    
            </li>
            <li>
                <Link to="/MUI3">Mui3</Link>    
            </li>
            <li>
                <Link to="/playground">Playground</Link>    
            </li>
            <li>
                <Link to="/paper">Paper</Link>    
            </li>
            <li>
                <Link to="/david">David</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path="/playground" element={<Playground />} />
        <Route index element={<MuiArash />} />

        <Route path="/arash" element={<MuiArash />} />

        <Route path="/meow" element={<MUIMeow />} />

        <Route path="/MUI3" element={<MUI3 toggler={toggleLights} />} />

        <Route path="/paper" element={<MUIPaper />} />

        <Route path="*" element={<David />} />


            {/* <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
        <Route path="*" element={<David />} /> 
    </Routes>
    </div>
}

export default App
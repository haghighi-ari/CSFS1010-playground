import { Routes, Route, Outlet, Link } from "react-router-dom";
import Playground from "./Playground";
import David from "./David";
import MuiArash from "./MUIArash";
import MUIMeow from "./MUIMeow";
import MUI3 from "./MUI3";
import MUIPaper from "./MUIPaper";

function App() {
    return <div>
    <nav>
        <ul>
            <li>
                <Link to="/playground">Playground</Link>    
            </li>
            <li>
                <Link to="/arash">Arash</Link>    
            </li>
            <li>
                <Link to="/meow">Meow</Link>    
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
        </ul>
    </nav>
    <Routes>
        <Route path="/playground" element={<Playground />} />
        <Route index element={<MuiArash />} />

        <Route path="/arash" element={<MuiArash />} />

        <Route path="/meow" element={<MUIMeow />} />

        <Route path="/MUI3" element={<MUI3 />} />

        <Route path="/paper" element={<MUIPaper />} />


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
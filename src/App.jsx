import { Routes, Route, Outlet, Link } from "react-router-dom";
import Playground from "./Playground";

function App() {
    return <div>
Hello
    <Routes>
        <Route path="/playground" element={<Playground />}>
            {/* <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */} 
        </Route>
    </Routes>
    </div>
}

export default App
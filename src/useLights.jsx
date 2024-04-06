import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useLights() {
    let [lightsOn,setLightsOn] = useState(false);
    const location = useLocation()
    console.log(location.pathname)


    useEffect(() => { 
        console.log('Lights are', lightsOn ? 'on' : 'off');
    }, [lightsOn]);

    function toggleLights() {
        setLightsOn(!lightsOn);
    }

    return {
        lightsOn,
        toggleLights,
        Title: () => <div>Lights</div>
    }

}

export default useLights;
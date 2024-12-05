import { useState } from "react";

export const Home = () => {
    const [switchlight, setSwitchLight] = useState("ON");

    const handleChangeName = () => {
        setSwitchLight("off")
    }

    return (
        <>
            <div>
                <p>current switch{switchlight}</p>
            
                <button onClick={handleChangeName} className="btn btn-success">switch the light</button>


            </div>
        </>
    );
}



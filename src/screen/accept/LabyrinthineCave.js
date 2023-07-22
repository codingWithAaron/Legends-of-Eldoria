import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LabyrinthineCave(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h5>Finally, you reach the entrance of the labyrinthine cave system leading to the dragon's lair. Here, you face your last decision:</h5>
                </div>
                <div>
                    <p>Quietly navigate the winding tunnels, relying on your stealth and cunning</p>
                    <h5>OR</h5>
                    <p>Charge head-on, prepared to face any adversary that crosses your path</p>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/quietlynavigate" className="btn btn-danger">Quietly Navigate</Link>
                </div>
                <div>
                    <Link to="/chargeheadon" className="btn btn-danger">Charge Head-on</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default LabyrinthineCave
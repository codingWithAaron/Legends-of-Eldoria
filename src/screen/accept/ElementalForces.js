import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ElementalForces(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>You channel your inner magic and conjure a tempest of wind and lightning. The elemental forces merge with your weapon, inflicting powerful blows that shake the very foundation of the dragon's lair. The dragon's strength wanes, and in a final, climactic clash, you deliver the decisive blow, emerging as the victorious champion.</h4>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/defeateddragon" className="btn btn-danger">Continue</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default ElementalForces
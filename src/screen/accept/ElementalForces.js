import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ElementalForces({magicAmulet}){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    {magicAmulet ? <h5>You channel your inner magic and conjure a tempest of wind and lightning. The elemental forces are amplified by the amulet you received from the druid, and it merges with your weapon, inflicting powerful blows that shake the very foundation of the dragon's lair. The dragon's strength wanes, and in a final, climactic clash, you deliver the decisive blow, emerging as the victorious champion.</h5> : <h5>You channel your inner magic and conjure a tempest of wind and lightning. The elemental forces merge with your weapon, inflicting powerful blows that shake the very foundation of the dragon's lair. The dragon's strength wanes, and in a final, climactic clash, you deliver the decisive blow, emerging as the victorious champion.</h5> }
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
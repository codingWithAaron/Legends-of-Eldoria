import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function PiercingEyes({magicAmulet}){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    {magicAmulet ? <h4>Using the amulet you received from the druid, you imbue your arrows with electricity. You utilize your exceptional archery skills and strike true. The dragon thrashes about in agony, temporarily blinded by your assault. With careful steps, you maneuver around the beast and strike mercilessly, exploiting its momentary weakness. Your relentless barrage finally brings the dragon to its knees, and victory is yours.</h4> : <h4>You utilize your exceptional archery skills and strike true. The dragon thrashes about in agony, temporarily blinded by your assault. With careful steps, you maneuver around the beast and strike mercilessly, exploiting its momentary weakness. Your relentless barrage finally brings the dragon to its knees, and victory is yours.</h4>}
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

export default PiercingEyes
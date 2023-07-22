import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function WeakestMoments({magicAmulet}){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    {magicAmulet ? <h5>The amulet you received from the druid glows yellow around your neck, as your boots are imbued with electricity. You feel an immense surge of speed. You dance with grace, evading the dragon's onslaught. Your nimble movements allow you to exploit the gaps in its defenses, darting in and out to deliver swift strikes. With each precise hit, the dragon weakens, until finally, you land the decisive blow, toppling the mighty creature.</h5> : <h5>You run around the cavern, evading the dragon's onslaught. Your movements barely allow you to exploit the gaps in its defenses, darting in and out to deliver swift strikes. With each precise hit, the dragon weakens, until finally, you land the decisive blow, toppling the mighty creature.</h5>}
                    
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

export default WeakestMoments
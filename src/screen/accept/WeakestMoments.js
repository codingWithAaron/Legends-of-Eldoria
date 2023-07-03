import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function WeakestMoments(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>You dance with grace, evading the dragon's onslaught. Your nimble movements allow you to exploit the gaps in its defenses, darting in and out to deliver swift strikes. With each precise hit, the dragon weakens, until finally, you land the decisive blow, toppling the mighty creature.</h4>
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
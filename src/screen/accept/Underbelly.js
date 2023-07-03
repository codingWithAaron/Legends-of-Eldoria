import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Underbelly(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>You launch a swift and precise attack. Your weapon pierces through the dragon's defenses, eliciting a mighty roar of pain. Seizing the opportunity, you press on, avoiding the dragon's fiery breath and delivering a series of decisive strikes until the majestic creature falls to the ground, defeated.</h4>
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

export default Underbelly
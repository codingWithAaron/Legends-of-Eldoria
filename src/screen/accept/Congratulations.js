import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Congratulations(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h5>Congratulations, brave adventurer! You have successfully completed your quest, but know that your journey doesn't end here. Many more adventures await you in the vast, magical realm of Eldoria.</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/thankyou" className="btn btn-danger">Continue</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default Congratulations
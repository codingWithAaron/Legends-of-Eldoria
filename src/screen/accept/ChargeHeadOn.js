import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ChargeHeadOn(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>You confront the dragon headlong, engaging in a fierce clash of steel and fire. It is a battle of sheer strength and bravery as you face the immense challenge with unwavering determination.</h4>
                </div>
                <div>
                    <h5>Call upon the elemental forces of nature to aid you in the battle</h5>
                    <h5>OR</h5>
                    <h5>Utilize your agility and reflexes to dodge the dragon's attacks and strike at its weakest moments</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/elementalforces" className="btn btn-danger">Elemental Forces</Link>
                </div>
                <div className="me-5">
                    <Link to="/weakestmoments" className="btn btn-danger">Weakest Moments</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default ChargeHeadOn
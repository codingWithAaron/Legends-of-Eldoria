import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DefeatedDragon(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>In the end, whether through careful strategy or sheer bravery, you emerge victorious. The dragon lies defeated, and the legendary treasure of Eldoria is yours to claim.</h4>
                    <h4>Your arrival back in town is filled with the cheers of the villagers, news of your triumph spreads like wildfire. Your name echoes throughout the land, becoming a symbol of bravery and heroism. The realm of Eldoria is forever grateful for your valiant efforts, and your legend will be recounted for generations to come.</h4>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="#" className="btn btn-danger">Continue</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default DefeatedDragon
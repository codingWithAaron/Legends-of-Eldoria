import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function UnchartedWilderness(){
    return (
        <>
            <div className="container d-flex flex-column m-5">
                <div className="text-center">
                    <div className="mb-5">
                        <h4>You discover a hidden waterfall cascading down a rocky cliff. Curiosity piqued, you explore the area and uncover a secret cave filled with ancient artifacts. Among them, you find a legendary sword, capable of striking down even the mightiest of foes. Equipped with the enchanted weapon, you press on, feeling empowered.</h4>
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

export default UnchartedWilderness
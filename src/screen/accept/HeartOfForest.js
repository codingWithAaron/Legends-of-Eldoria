import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HeartOfForest(){
    return (
        <>
            <div className="container d-flex flex-column m-5">
                <div className="text-center">
                    <div className="mb-5">
                        <h4>You find yourself stumbling upon a hidden grove. Inside, you encounter a wise old druid who offers guidance and a magical amulet to aid you in your quest. With the amulet in your possession, you continue your journey with newfound confidence.</h4>
                    </div>
                </div>
                <div className="text-center mt-5 d-flex justify-content-center">
                    <div className="me-5">
                        <Link to="/mountains" className="btn btn-danger">Continue</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeartOfForest
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image2 from "../accept/images/fotor-ai-2023070375946.jpg"

function WindingValleys(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="d-flex justify-content-center">
                <img className="w-25 mb-4" src={image2} alt="hidden village"/>
            </div>
            <div className="text-center">
                <div className="mb-5">
                    <h4>Feeling at ease for taking a safer route, you eventually come across a hidden village nestled within the valleys. Grateful for your presence, the villagers offer you a magical potion that grants temporary invulnerability against fire. With this valuable asset, you continue your journey with renewed determination, knowing that the dragon's flames won't harm you.</h4>
                </div>
            </div>
            <div className="text-center mt-2 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/labyrinthinecave" className="btn btn-danger">Continue</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default WindingValleys
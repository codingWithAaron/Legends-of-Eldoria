import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image1 from "../accept/images/fotor-ai-20230703102225.jpg"

function AcceptIntro(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="d-flex justify-content-center">
                <img className="w-50 mb-4" src={image1} alt="map"/>
            </div>
            <div className="text-center">
                <div className="mb-5">
                    <h4>The elder's eyes gleam with hope as he provides you with a map to the dragon's lair. The map reveals that the journey will take you through treacherous forests, treks across perilous mountains, and a labyrinthine cave system before reaching the dragon's abode. Armed with the knowledge of the dragon's location, you embark on your epic quest.</h4>
                </div>
                <div>
                    <h5>"Now, brave adventurer, it is up to you to decide the fate that awaits you. Choose your path wisely, for the decisions you make will shape the course of your adventure in this fantastical realm."</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                    <Link to="/forkinroad" className="btn btn-danger">Continue</Link>
            </div>
        </div>
    </>
 )
}

export default AcceptIntro
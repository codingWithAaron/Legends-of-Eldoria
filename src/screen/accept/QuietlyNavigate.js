import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function QuietlyNavigate(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>You venture into the winding tunnels and manage to evade various traps and lurking creatures. Your patience and agility pay off as you reach the heart of the labyrinth undetected. There, you observe the dragon from the shadows, studying its movements and weaknesses. Patiently, you wait for the perfect moment to strike.</h4>
                </div>
                <div>
                    <h5>Aim for the dragon's vulnerable underbelly, where its scales are less protected</h5>
                    <h5>OR</h5>
                    <h5>Attempt to blind the dragon by targeting its piercing eyes with well-aimed projectiles</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="#" className="btn btn-danger">Aim for the underbelly</Link>
                </div>
                <div className="me-5">
                    <Link to="#" className="btn btn-danger">Blind its piercing eyes</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default QuietlyNavigate
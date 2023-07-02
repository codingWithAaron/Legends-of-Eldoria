import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Mountains(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>Eventually, you arrive at the base of the treacherous mountains. The weather takes a dramatic turn. Dark clouds gather overhead, obscuring the sunlight and casting a gloomy shadow over the landscape. The wind howls fiercely, whistling through the jagged peaks and sending a chill down your spine. Snow begins to fall, lightly at first but gradually increasing in intensity. Here, you face another crucial decision:</h4>
                </div>
                <div>
                    <h5>Scale the treacherous peaks, risking danger but potentially saving time</h5>
                    <h5>OR</h5>
                    <h5>Seek a safer route through the winding valleys, adding more time to your journey</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/treacherouspeaks" className="btn btn-danger">Treacherous Peaks</Link>
                </div>
                <div>
                    <Link to="#" className="btn btn-danger">Winding Valleys</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default Mountains
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TreacherousPeaks(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>The rough journey of scaling the peaks present another dangerous turn of events. You encounter a pack of fearsome snow wolves. With your quick thinking and skillful swordplay, you manage to fend them off and proceed, feeling a sense of accomplishment. As you descend the other side of the mountains, you spot the dragon's lair in the distance, and your heart quickens with anticipation.</h4>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/labyrinthinecave" className="btn btn-danger">Continue</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default TreacherousPeaks
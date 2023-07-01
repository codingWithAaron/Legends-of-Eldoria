import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function InitialChoices(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h4>Amidst the jovial atmosphere, a mysterious figure clad in a tattered cloak approaches your table. With a hushed voice, they reveal themselves as the village elder, Sir Reginald, and share a dire tale of a dragon terrorizing the realm and hoarding a vast treasure deep within its lair.</h4>
                </div>
                <div>
                    <h5>"I beseech you, brave adventurer," Sir Reginald implores, "Will you embark on a perilous journey to vanquish the dragon and reclaim the treasure for the good of Eldoria?"</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="#" className="btn btn-danger">Accept the Quest</Link>
                </div>
                <div>
                    <Link to="#" className="btn btn-danger">Decline the Quest and seek a different adventure</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default InitialChoices
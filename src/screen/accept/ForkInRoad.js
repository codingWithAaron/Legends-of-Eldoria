import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image1 from "../accept/images/fotor-ai-2023070375147_1.jpg"
import image2 from "../accept/images/fotor-ai-2023070375147_2.jpg"

function ForkInRoad(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="d-flex">
                <div className="me-4">
                    <img className="w-100" src={image1} alt="well worn path"/>
                </div>
                <div>
                    <img className="w-100" src={image2} alt="explore the uncharted"/>
                </div>
            </div>
            <div className="text-center">
                <div className="mb-5">
                    <h4>As you set out to confront the dragon, you find yourself navigating the dense, enchanted forest. As you journey deeper into its mysterious depths, you encounter a fork in the road:</h4>
                </div>
                <div>
                    <h5>Follow the well-worn path that winds through the heart of the forest</h5>
                    <h5>OR</h5>
                    <h5>Venture off the beaten path and explore the uncharted wilderness</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/heartofforest" className="btn btn-danger">Heart of the Forest</Link>
                </div>
                <div>
                    <Link to="/unchartedwilderness" className="btn btn-danger">Uncharted Wilderness</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default ForkInRoad
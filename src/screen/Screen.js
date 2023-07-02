import React from "react";
import {Switch, Route} from "react-router-dom"
import Start from "./start/Start";
import Scene1Intro from "./intro/Intro";
import InitialChoices from "./initialChoices/InitialChoices";
import AcceptIntro from "./accept/AcceptIntro";
import ForkInRoad from "./accept/ForkInRoad";
import HeartOfForest from "./accept/HeartOfForest";
import UnchartedWilderness from "./accept/UnchartedWilderness";
import Mountains from "./accept/Mountains";

function Screen(){
 return (
    <>
        <div className="border border-5 border-dark rounded m-5">
            <Switch>
                <Route path="/" exact={true}>
                    <Start />
                </Route>
                <Route path="/intro" exact={true}>
                    <Scene1Intro />
                </Route>
                <Route path="/initialchoices" exact={true}>
                    <InitialChoices />
                </Route>
                <Route path="/accept" exact={true}>
                    <AcceptIntro />
                </Route>
                <Route path="/forkinroad" exact={true}>
                    <ForkInRoad />
                </Route>
                <Route path="/heartofforest" exact={true}>
                    <HeartOfForest />
                </Route>
                <Route path="/unchartedwilderness" exact={true}>
                    <UnchartedWilderness />
                </Route>
                <Route path="/mountains" exact={true}>
                    <Mountains />
                </Route>

            </Switch>
        </div>
    </>
 )
}

export default Screen
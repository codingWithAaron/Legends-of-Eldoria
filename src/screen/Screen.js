import React from "react";
import {Switch, Route} from "react-router-dom"
import Start from "./start/Start";
import Scene1Intro from "./intro/Intro";
import InitialChoices from "./initialChoices/InitialChoices";

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
            </Switch>
        </div>
    </>
 )
}

export default Screen
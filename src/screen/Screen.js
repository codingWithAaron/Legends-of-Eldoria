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
import TreacherousPeaks from "./accept/TreacherousPeaks";
import WindingValleys from "./accept/WindingValleys";
import LabyrinthineCave from "./accept/LabyrinthineCave";
import QuietlyNavigate from "./accept/QuietlyNavigate";
import Underbelly from "./accept/Underbelly";
import DefeatedDragon from "./accept/DefeatedDragon";
import Congratulations from "./accept/Congratulations";
import ThankYou from "./accept/ThankYou";
import PiercingEyes from "./accept/PiercingEyes";
import ChargeHeadOn from "./accept/ChargeHeadOn";
import ElementalForces from "./accept/ElementalForces";
import WeakestMoments from "./accept/WeakestMoments";

function Screen({magicAmulet, setMagicAmulet}){
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
                    <ForkInRoad magicAmulet={magicAmulet} setMagicAmulet={setMagicAmulet} />
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
                <Route path="/treacherouspeaks" exact={true}>
                    <TreacherousPeaks />
                </Route>
                <Route path="/windingvalleys" exact={true}>
                    <WindingValleys />
                </Route>
                <Route path="/labyrinthinecave" exact={true}>
                    <LabyrinthineCave />
                </Route>
                <Route path="/quietlynavigate" exact={true}>
                    <QuietlyNavigate />
                </Route>
                <Route path="/underbelly" exact={true}>
                    <Underbelly magicAmulet={magicAmulet} />
                </Route>
                <Route path="/piercingeyes" exact={true}>
                    <PiercingEyes magicAmulet={magicAmulet} />
                </Route>
                <Route path="/chargeheadon" exact={true}>
                    <ChargeHeadOn />
                </Route>
                <Route path="/elementalforces" exact={true}>
                    <ElementalForces magicAmulet={magicAmulet} />
                </Route>
                <Route path="/weakestmoments" exact={true}>
                    <WeakestMoments magicAmulet={magicAmulet} />
                </Route>
                <Route path="/defeateddragon" exact={true}>
                    <DefeatedDragon />
                </Route>
                <Route path="/congratulations" exact={true}>
                    <Congratulations />
                </Route>
                <Route path="/thankyou" exact={true}>
                    <ThankYou />
                </Route>

            </Switch>
        </div>
    </>
 )
}

export default Screen
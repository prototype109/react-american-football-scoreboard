//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from './Buttons';
import Players from './Players';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [home, homeScores] = useState(0);
  let [away, awayScores] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">

          <Players side="home" currentScore={home}/>

          {/* <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. }

            <div className="home__score">{home}</div>
          </div> */}


          <div className="timer">00:03</div>
          <Players side="away" currentScore={away}/>

          {/* <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div> */}
          
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
      <Buttons side="home"
                 score={homeScores}/>
        {/* <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. }
          <button className="homeButtons__touchdown" onClick={() => homeScores(prevScore => prevScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeScores(prevScore => prevScore + 3)}>Home Field Goal</button>
        </div> */}
        <Buttons side="away"
                 score={awayScores}/>
        {/* <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => awayScores(prevScore => prevScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => awayScores(prevScore => prevScore + 3)}>Away Field Goal</button>
        </div> */}
      </section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import ProgressDisplay from "./components/ProgressDisplay";
import GameNotStartedDisplay from "./components/GameNotStartedDisplay";
import GameCountDownDisplay from "./components/GameCountDownDisplay";
import GameStartedDisplay from "./components/GameStartedDisplay";
import GameFinishedDisplay from "./components/GameFinishedDisplay";
import RegattaIntro from "./components/RegattaIntro";
import RegattaInfo from "./components/RegattaInfo";

function App() {
const [gameState, setGameState] = useState(0);
  
  function renderByGamestate() {
    switch(gameState) {
      case 0:
        return  <RegattaIntro setGameState={setGameState}/>
      case 1:
        // TODO This may need to be a  loading screen instead of a countdown.
        return <GameCountDownDisplay setGameState={setGameState} />
      case 2:
        return  <GameStartedDisplay setGameState={setGameState} />
      case 3:
        return <GameFinishedDisplay setGameState={setGameState} />
    }
  }

  return (
  <>
    <Header />

    <main>
      {/* Game Description */}
      <div className="bg-secondary p-4">
        <div className="container-md">
            <div className="row justify-content-center align-items-center my-5">
              <div className="col-11 col-md-8 text-center my-5">
                {renderByGamestate()}
              </div>
            </div>
        </div>
      </div>

      {/* Adaptive Section */}
      <div className="bg-dark pt-5">
        <div className="container-md pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-11 col-md-8 mb-5 text-center">
            <RegattaInfo />


            </div>
          </div>
        </div>
      </div>


    </main>

    <Footer />
  </>
  );
}

export default App;

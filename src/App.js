import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import ProgressDisplay from "./components/ProgressDisplay";
import GameNotStartedDisplay from "./components/GameNotStartedDisplay";
import GameCountDownDisplay from "./components/GameCountDownDisplay";
import GameStartedDisplay from "./components/GameStartedDisplay";
import GameFinishedDisplay from "./components/GameFinishedDisplay";

function App() {
const [gameState, setGameState] = useState(0);
  
  function renderByGamestate() {
    switch(gameState) {
      case 0:
        return <GameNotStartedDisplay setGameState={setGameState} />
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
            <div className="row justify-content-center align-items-center">
              <div className="col-11 col-md-8 text-start my-5">
                <h1 className="display-5 text-dark text-center">Welcome to Type Regatta</h1>
                <p className="lead mt-4 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum vero consequatur officia delectus sint expedita maxime debitis illo sunt?</p>
              </div>
            </div>
          </div>
          {/* TODO make the Timer show only for relavent game state */}
          <Timer />
          <ProgressDisplay />
      </div>

      {/* Adaptive Section */}
      <div className="bg-dark pt-5">
        <div className="container-md pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-11 col-md-8 mb-5 text-center">

            {renderByGamestate()}

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

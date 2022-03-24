import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameLoadingDisplay from "./components/GameLoadingDisplay";
import GameStartedDisplay from "./components/GameStartedDisplay";
import GameFinishedDisplay from "./components/GameFinishedDisplay";
import RegattaIntro from "./components/RegattaIntro";
import RegattaInfo from "./components/RegattaInfo";

function App() {
  const [gameState, setGameState] = useState(0);
  const [quote, setQuote] = useState("");


  useEffect(() => {
    gameState === 1 && updateQuoteState()


  })

  const API_URL = "http://api.quotable.io/random?minLength=200"

  async function fetchRandomQuote() {
    try {
      const response = await fetch(API_URL);
      if(response.status === 200) {
        const data = await response.json();
        console.log(data)
        return data
      }
    }
    catch(err) {
      console.error(err)
    }
  }

    async function updateQuoteState() {
    const quoteData = await fetchRandomQuote()
    const quote = quoteData.content
    console.log(quote)
    setQuote(quote)
    setGameState(2);
  }
    
  function renderByGamestate() {
    switch(gameState) {
      case 0:
        return  <RegattaIntro setGameState={setGameState}/>
      case 1:
        return <GameLoadingDisplay setGameState={setGameState} />
      case 2:
        return  <GameStartedDisplay setGameState={setGameState} quote={quote} />
      case 3:
        return <GameFinishedDisplay setGameState={setGameState} />
    }
  }

  return (
  <>
    <Header />

    <main>
      {/* Dynamic Section */}
      <div className="bg-secondary py-4">
        <div className="container-md">
            <div className="row justify-content-center align-items-center my-5">
              <div className="col-11 col-md-8 text-center my-5">
                {renderByGamestate()}
              </div>
            </div>
        </div>
      </div>

      {/* Game Info */}
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

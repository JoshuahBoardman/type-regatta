import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameLoadingDisplay from "./components/GameLoadingDisplay";
import GameDisplay from "./components/GameDisplay";
import GameFinishedDisplay from "./components/GameFinishedDisplay";
import RegattaIntro from "./components/RegattaIntro";
import RegattaInfo from "./components/RegattaInfo";

function App() {
  const [gameState, setGameState] = useState(0);
  const [quote, setQuote] = useState("");
  const [timeTaken, setTimeTaken] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);


  useEffect(() => {
    gameState === 1 && updateQuoteState()
  })

  const API_URL = "http://api.quotable.io/random?minLength=200"

  async function fetchRandomQuote() {
    try {
      const response = await fetch(API_URL);
      if(response.status === 200) {
        const data = await response.json();
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
    setQuote(quote)
    setGameState(2);

  }
    
  function renderByGamestate() {
    switch(gameState) {
      case 0:
        return  <RegattaIntro setGameState={setGameState} />
      case 1:
        return <GameLoadingDisplay setGameState={setGameState} />
      case 2:
        return  <GameDisplay setGameState={setGameState} quote={quote} setTimeTaken={setTimeTaken} wordsPerMinute={wordsPerMinute} setWordsPerMinute={setWordsPerMinute} />
      case 3:
        return <GameFinishedDisplay setGameState={setGameState} timeTaken={timeTaken} wordsPerMinute={wordsPerMinute}/>
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

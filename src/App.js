import Header from "./components/Header";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import ProgressDisplay from "./components/ProgressDisplay";
import Button from "./components/Button.jsx";
import TextDisplay from "./components/TextDisplay";
import TextInput from "./components/TextInput";


function App() {

  
  return (
  <>
    <Header />

    <main className="bg-secondary">
      {/* Game Description */}
      <div className="container-md">
        <div className="row justify-content-center align-items-center">
          <div className="col-11 col-md-8 text-start my-5">
            <h1 className="display-5 text-dark">Welcom to Type Regatta</h1>
            <p className="lead mt-2 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum vero consequatur officia delectus sint expedita maxime debitis illo sunt?</p>
          </div>
        </div>
      </div>

      <Timer />

      <ProgressDisplay />

      <div className="container-md pb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-11 col-md-8 mb-5 text-center">

        <TextDisplay />
        <TextInput />
        <Button />

          </div>
        </div>
      </div>

    </main>

    <Footer />
  </>
  );
}

export default App;

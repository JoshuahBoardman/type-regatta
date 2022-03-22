import Header from "./components/Header";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

function App() {
  return (
  <>
    <Header />

    <main className="bg-secondary">
      {/* Game Description */}
      <div className="container-md">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 text-md-start my-5">
            <h1 className="display-5 text-dark">Welcom to Type Regatta</h1>
            <p className="lead mt-2 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum vero consequatur officia delectus sint expedita maxime debitis illo sunt?</p>
          </div>
        </div>
      </div>

      <Timer />

    </main>

    <Footer />
  </>
  );
}

export default App;

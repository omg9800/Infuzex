import "./styles/style.scss";
import Main from "./components/main";
import Carousel from "./components/corousel";

function App() {
  return (
    <div className="App">
      <Main />
      <div className="corousel">
        <Carousel />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import got from "./data_2";
import NavButtons from "./components/NavButtons";
function App() {
  console.log(got);
  return (
    <div>
      <NavButtons names={got.houses} />
    </div>
  );
}

export default App;

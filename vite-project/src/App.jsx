import "./App.css";
import Container from "../../component/container";
import List from "../../component/List";
import Formvalidation from "../../component/Formvalidation";

function App() {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div>
          <List />
          <p>product discovery and building what matters</p>
        </div>
        <div>
          <List />
          <p>Measuring to ensure updates are a success</p>
        </div>
      </div>
      <div>
        <List />
        <p>Add much more!</p>
      </div>
      <Formvalidation />
      <Container />
    </>
  );
}

export default App;

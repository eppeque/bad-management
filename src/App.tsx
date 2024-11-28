import { useContext } from "react";
import { ExampleContext } from "./ExampleContext";

function App() {
  const { counter, setCounter, user } = useContext(ExampleContext);

  function increment(): void {
    user.name = "Quentin";
    user.age = 21;
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={increment}>Clicked: {counter}</button>
      <p>
        {user.name} is {user.age} years old.
      </p>
    </div>
  );
}

export default App;

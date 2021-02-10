import "./App.css";
import Userfront from "@userfront/react";
Userfront.init("demo1234");

const SignupForm = Userfront.build({
  toolId: "nkmbbm",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignupForm />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

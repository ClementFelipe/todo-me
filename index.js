import ReactDOM from "react-dom";

export function App() {
    return <h1>Hello world!</h1>;
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
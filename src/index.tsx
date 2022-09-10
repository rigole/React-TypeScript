import ReactDOM from "react-dom"
import GuesList from "./state/GuesList";

const App = () => {
    return (
        <div>
            <GuesList/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App
import ReactDOM from "react-dom"
import GuesList from "./state/GuesList";
import UserSearch from "./state/UserSearch";

const App = () => {
    return (
        <div>
            <UserSearch/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App
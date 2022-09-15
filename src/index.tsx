import ReactDOM from "react-dom"
import GuesList from "./state/GuesList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
    return (
        <div>
            <EventComponent/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App
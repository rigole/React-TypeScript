import { ChildAsFC } from "./Child";


const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log("Clicked button")} >
            sxcvbn
        </ChildAsFC>
    );
}

export default Parent
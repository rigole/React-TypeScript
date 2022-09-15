import { Component } from "react";

interface UserSearchProps {
    users: {
        name: string;
        age: number;
    }[]
}

interface User {
    name: string;
    age: number;
}

interface UserSearchState {
    name: string;
    user: { name: string; age: number } | undefined
}

class UserSearch extends Component<UserSearchProps >{

    state: UserSearchState = {
        name: '',
        user: undefined
    };



    render() {
        const { name, user } = this.state;

        const onclick = () => {
            const foundUser = this.props.users.find((user) => {
                return user.name === this.state.name;
            })

            this.setState({ user: foundUser})
        }

        return(
            <div>
                UserSearch
                <input value={this.state.name}
                       onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={onclick}>Find User</button>
                <div>
                    {user && user.name}
                    {user && user.age}
                </div>
            </div>
        )
    }

}

export default UserSearch;
import {ActionType} from "../action-types";

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
    //data: string[];
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =
| SearchRepositoriesAction
| SearchRepositoriesSuccessAction
| SearchRepositoriesErrorAction
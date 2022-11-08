export interface dataState {
    data: [];
}

const initialState = {
    data:[]
};

export type Action = { type: "GET_DATA"; payload: string };

export const dashReducer = (
    state:dataState ,
    action:Action
) => {
    switch (action.type) {
        case "GET_DATA": {
            return { ...state, ...state.data };
        }
        default:
            return state;
    }
};
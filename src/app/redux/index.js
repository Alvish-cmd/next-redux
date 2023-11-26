import store from "./store";

store.dispatch({
    type:"BugAdded",
    payload:{
        description:"Bug1"
    }
})

console.log(store.getState());
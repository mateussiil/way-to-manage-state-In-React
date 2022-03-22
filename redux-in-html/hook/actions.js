// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document
.getElementById("increment")
.addEventListener("click", function () {
    store.dispatch({ type: "counter/incremented" });
});

document
.getElementById("decrement")
.addEventListener("click", function () {
    store.dispatch({ type: "counter/decremented" });
});

document
.getElementById("incrementIfOdd")
.addEventListener("click", function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
    store.dispatch({ type: "counter/incremented" });
    }
});

document
.getElementById("incrementAsync")
.addEventListener("click", function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
    store.dispatch({ type: "counter/incremented" });
    }, 1000);
});

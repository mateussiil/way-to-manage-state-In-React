# Redux #

First, always read the documentantion. You find [here](https://redux.js.org/tutorials/index)

## What is Redux ? ##

Redux is a pattern and library for managing and updating application state, using events called actions.

## Why should I use Redux ? ##

Redux helps you manage "global" state that is needed across many parts of your application.

## When should I use Redux ? ##

    - You have large amounts of application state that are need in many places in the app.
    - The app state is updated frequently over time.
    - The logic to updat tha state may be complex.
    - Tha app has a medium of large sized codebase and might be worked on by many people.

# The Basic #

The center of every Redux aplication is the **store**. A store is a container that holds your application's global state.

## **Dangerous** ##

    1. You  must never directly modify or change the state that is kept inside the Redux Store.
    2. Instead, the only way to cause an updated to the state is to create a plain **action**, object that describes "something the action to the store to tell it what happened
    3. When an actin is **dispatched** the store runs the root **reducer** function, and lets it calculate the new state based on the old state and action.
    4. Finally, the store notifies **subscribers** tha the state has been updated so the UI can be updated with new data. 

## Data Flow ##
    1. Actions are dispatched in response to a user interactor like a click.
    2. the store runs the reducer function to calculate a new state.
    3. the UI reads the new state to display the new values.

![Alt Text](.\reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
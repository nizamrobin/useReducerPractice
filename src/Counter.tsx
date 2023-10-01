import { useReducer } from "react";

// Flaws: 1. type declaration of useReducer not defined
//        2. dispatch function shows error. why?

type numOrVoid = number | void;
function reducer(state: number, action: { type: string }): numOrVoid {
  switch (action.type) {
    case "inc": {
      return state + 1;
    }
    case "dec": {
      return state - 1;
    }
    case "reset": {
      return 0;
    }
    default: {
      try {
        throw new Error("My Error: This is just for testing error!");
      } catch (err) {
        alert(err);
      }
    }
  }
}
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="counter">
      <p className="count">{count}</p>
      <button className="dec" onClick={() => dispatch({ type: "dec" })}>
        -
      </button>
      <button className="inc" onClick={() => dispatch({ type: "inc" })}>
        +
      </button>
      <button className="reset" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <button className="error" onClick={() => dispatch({ type: "error" })}>
        error
      </button>
    </div>
  );
}

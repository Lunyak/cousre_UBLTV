import { ICounterSchema } from "../types/counterShema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice.test", () => {
  test("декремент", () => {
    const state: ICounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
});

describe("counterSlice.test", () => {
    test("инкремент", () => {
      const state: ICounterSchema = { value: 10 };
      expect(counterReducer(state, counterActions.increment())).toEqual({
        value: 11,
      });
    });
  });


  describe("counterSlice.test", () => {
    test("пустой стейт", () => {
      expect(counterReducer(undefined, counterActions.increment())).toEqual({
        value: 1,
      });
    });
  });
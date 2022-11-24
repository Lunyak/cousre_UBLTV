import type { ICounterSchema } from "./model/types/counterShema";
import { counterReducer } from "./model/slice/counterSlice";
import { Counter } from "./ui/Counter";

export { ICounterSchema, counterReducer, Counter };

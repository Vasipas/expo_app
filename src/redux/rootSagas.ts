import { spawn } from "redux-saga/effects";
import UserSaga from "./reducers/Users/saga";

export default function* rootSagas() {
	yield spawn(UserSaga);
}
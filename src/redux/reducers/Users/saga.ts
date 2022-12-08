import { call, put, takeLatest } from "redux-saga/effects";
import { showHelloWorld } from "./reducer";

function* getUsersWorker() {
  try {
  }
  catch (error) {
    console.log(error);
  }
  finally {}
}

function* UserSaga() {
    yield takeLatest(showHelloWorld.type, getUsersWorker);
  }
  
  export default UserSaga;
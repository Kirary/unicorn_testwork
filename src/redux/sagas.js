import { call, put, takeLatest } from "redux-saga/effects";
import { callApiCategories } from "../api/apiMocks";
import AC from "./actionTypes";

function* fetchCategories() {
    try {
        const categories = yield call(callApiCategories);
        yield put({ type: AC.categories.success, categories });
    } catch (e) {
        yield put({ type: AC.categories.failed, message: e.message });
    }
}

function* fetchItems() {
    try {
        const items = yield call(callApiCategories);
        yield put({ type: AC.items.success, items });
    } catch (e) {
        yield put({ type: AC.items.failed, message: e.message });
    }
}

function* sagas() {
    yield takeLatest(AC.categories.fetch, fetchCategories);
    yield takeLatest(AC.items.fetch, fetchItems);
}

export default sagas;

import { call, put, takeLatest } from "redux-saga/effects";
import { callApiCategories, callApiItems } from "../api/apiMocks";
import AC from "./actionTypes";
import { categoriesLoaded, categoriesLoadFailed, itemsLoaded, itemsLoadFailed } from "./actions";

function* fetchCategories() {
    try {
        const categories = yield call(callApiCategories);
        yield put(categoriesLoaded(categories));
    } catch (e) {
        yield put(categoriesLoadFailed());
    }
}

function* fetchItems() {
    try {
        const items = yield call(callApiItems);
        yield put(itemsLoaded(items));
    } catch (e) {
        yield put(itemsLoadFailed());
    }
}

function* sagas() {
    yield takeLatest(AC.categories.fetch, fetchCategories);
    yield takeLatest(AC.items.fetch, fetchItems);
}

export default sagas;

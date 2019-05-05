import AC from "./actionTypes";

const initialState = {
    categories: {
        data: [],
        fetched: false,
        fetching: false,
        failed: false,
    },
    items: {
        dictionaryByItemId: {},
        dictionaryByCategoryId: {},
        fetched: false,
        fetching: false,
        failed: false,
    },
    selectedItems: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AC.categories.fetch: {
            return state;
        }
        case AC.categories.success: {
            const categories = { ...state.categories, data: action.categories };
            return {
                ...state,
                categories,
            };
        }
        case AC.categories.failed: {
            return state;
        }
        case AC.items.fetch: {
            return state;
        }
        case AC.items.success: {

            // {"id":1,"category_id":8,"title":"\u0422\u043e\u0432\u0430\u0440 1","quantity":12,"price":427.6}

            const dictionaryByCategoryId = {};
            const dictionaryByItemId = {};
            action.items.forEach((item) => {
                dictionaryByItemId[item.id] = item;
                if (dictionaryByCategoryId[item.category_id]) {
                    dictionaryByCategoryId[item.category_id].push(item);
                } else {
                    dictionaryByCategoryId[item.category_id] = [];
                }
            });
            const items = {
                data: action.items,
                dictionaryByCategoryId,
                dictionaryByItemId,
                fetched: true,
                fetching: false,
                failed: false,
            };
            return {
                ...state,
                items,
            };
        }
        case AC.items.failed: {
            return state;
        }
        default:
            return state;
    }
}

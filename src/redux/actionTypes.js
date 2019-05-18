const createTypes = (name) => {
    return {
        [name]: {
            fetch: `${name.toUpperCase()}_FETCH_REQUESTED`,
            success: `${name.toUpperCase()}_FETCH_SUCCEEDED`,
            failed: `${name.toUpperCase()}_FETCH_FAILED`,
        },
    };
};

const actionTypes = {
    ...createTypes("categories"),
    ...createTypes("items"),
    setSelectedCategory: "SELECT_CATEGORY",
    setSelectedItem: "SELECT_ITEM",
    addToCart: "ADD_TO_CART",
    deleteFromCart: "DELETE_FROM_CART",
};

export default actionTypes;

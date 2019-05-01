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
};

export default actionTypes;

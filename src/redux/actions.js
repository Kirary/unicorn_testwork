import AC from "./actionTypes";

export const getCategories = () => ({ type: AC.categories.fetch });

export const categoriesLoaded = (categories) => {
    return {
        type: AC.categories.success,
        categories,
    };
};

export const categoriesLoadFailed = () => ({ type: AC.categories.failed });

export const getItems = () => ({ type: AC.items.fetch });

export const itemsLoaded = (items) => ({
    type: AC.items.success,
    items,
});

export const itemsLoadFailed = () => ({ type: AC.items.failed });

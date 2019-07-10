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

export const setSelectedCategoryId = (id) => ({type: AC.setSelectedCategory, id})
export const setSelectedItemId = (id) => ({type: AC.setSelectedItem, id})

export const addItemToCart = (id, amount) => ({type: AC.addToCart, id, amount});
export const updateItemInCart = (id, amount) =>({type: AC.updateItemInCart, id, amount});
export const deleteFromCart = (id) => ({type: AC.deleteFromCart, id});

export const remitPayment = (items) => ({type: AC.remitPayment.fetch});
export const remitPaymentSuccess = () => ({type: AC.remitPayment.success});
export const remitPaymentFailed = () => ({type: AC.remitPayment.failed});

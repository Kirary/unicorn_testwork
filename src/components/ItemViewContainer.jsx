import React from "react";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId } from "../redux/actions";
import ItemView from "./ItemView/ItemView";
import { Link } from "react-router-dom";

class ItemViewContainer extends React.Component {
    render() {
        const { items, match, itemsFetched, categoryFetched } = this.props;
        if (itemsFetched && categoryFetched && items[match.params.id]) {
            return <ItemView item={items[match.params.id]} />;
        } else {
            return (
                <div style={{ marginTop: "40vh", textAlign: "center" }}>
                    <div>Нет такого товара</div>
                    <Link to="/">Вернуться в каталог</Link>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByItemId,
    itemsFetched: state.items.fetched,
    fetching: state.items.fetching,
    failed: state.items.failed,
    categoryFetched: state.categories.fetched,
});

const dispatchToProps = {
    setSelectedCategoryId,
    setSelectedItemId,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(ItemViewContainer);

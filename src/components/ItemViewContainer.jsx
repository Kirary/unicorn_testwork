import React from "react";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId } from "../redux/actions";
import ItemView from "./ItemView/ItemView";

class ItemViewContainer extends React.Component {
    render() {
        const { items, match, itemsFetched, categoryFetched } = this.props;
        return itemsFetched && categoryFetched && <ItemView item={items[match.params.id]}/>;
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

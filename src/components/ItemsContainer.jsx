import React from "react";
import { Grid, createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId } from "../redux/actions";
import ItemCard from "./ItemCard";
import { history } from "../Root";
import { Link } from "react-router-dom";

const styles = (theme) =>
    createStyles({
        root: {
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
        },
    });

class ItemsContainer extends React.Component {
    componentDidMount() {
        const { selectedCategoryId, setSelectedCategoryId, match } = this.props;
        this.props.setSelectedItemId(undefined);
        !selectedCategoryId && setSelectedCategoryId(match.params.id);
    }
    render() {
        const { items, classes, match } = this.props;

        const itemsInCategory = items && items[match.params.id] ? items[match.params.id] : [];

        const itemCards = itemsInCategory.map((item) => (
            <ItemCard item={item} key={item.id} onClick={this.handleCardClick(item.id)} />
        ));

        return (
            <Grid className={classes.root} container spacing={16}>
                {itemCards.length > 0 ? (
                    itemCards
                ) : (
                    <div style={{ margin: "40vh auto", textAlign: "center" }}>
                        <div>В этой категории нет товара</div>
                        <Link to="/">Вернуться в каталог</Link>
                    </div>
                )}
            </Grid>
        );
    }

    handleCardClick = (id) => () => {
        this.props.setSelectedItemId(id);
        history.push(`/item/${id}`);
    };
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByCategoryId,
    fetched: state.items.fetched,
    fetching: state.items.fetching,
    failed: state.items.failed,
    selectedCategoryId: state.selectedCategoryId,
});

const dispatchToProps = {
    setSelectedCategoryId,
    setSelectedItemId,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(ItemsContainer));

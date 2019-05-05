import React from "react";
import { Grid, createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getItems } from "../redux/actions";
import ItemCard from "./ItemCard";

const styles = (theme) =>
    createStyles({
        root: {
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
        },
    });

class ItemsContainer extends React.Component {
    componentDidMount() {
        !this.props.fetched && this.props.getItems();
    }
    render() {
        const { items, classes, match } = this.props;

        const item = items && items[match.params.id] ? items[match.params.id] : [];

        const itemCards = item.map((item) => <ItemCard item={item} key={item.id}/>);

        return (
            <Grid className={classes.root} container spacing={16}>
                {itemCards}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByCategoryId,
    fetched: state.items.fetched,
    fetching: state.items.fetching,
    failed: state.items.failed,
});

const dispatchToProps = {
    getItems,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(ItemsContainer));

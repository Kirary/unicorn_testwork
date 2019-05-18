import React from "react";
import { Grid, createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId } from "../redux/actions";
import ItemCard from "./ItemCard";
import { history } from "../Root";

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

        const item = items && items[match.params.id] ? items[match.params.id] : [];

        const itemCards = item.map((item) => <ItemCard item={item} key={item.id} onClick={this.handleCardClick(item.id)}/>);

        return (
            <Grid className={classes.root} container spacing={16}>
                {itemCards}
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

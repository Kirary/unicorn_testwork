import React from "react";
import { Grid, createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId } from "../redux/actions";
import CategoryCard from "./CategoryCard";
import { history } from "../Root";

const styles = (theme) =>
    createStyles({
        root: {
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
        },
    });

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.setSelectedCategoryId(undefined);
        this.props.setSelectedItemId(undefined);
    }
    render() {
        const { categories = [] } = this.props;

        const categoryCards = categories.map((category) => (
            <CategoryCard category={category} key={category.id} onClick={this.handleCardClick(category.id)} />
        ));

        const { classes } = this.props;
        return (
            <Grid className={classes.root} container spacing={16}>
                {categoryCards}
            </Grid>
        );
    }
    handleCardClick = (id) => () => {
        this.props.setSelectedCategoryId(id);
        history.push(`/category/${id}`);
    };
}

const mapStateToProps = (state) => ({
    categories: state.categories.data,
    fetching: state.categories.fetching,
});

const dispatchToProps = {
    setSelectedCategoryId,
    setSelectedItemId,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(CategoriesContainer));

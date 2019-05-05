import React from "react";
import { Grid, createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getCategories } from "../redux/actions";
import CategoryCard from "./CategoryCard";

const styles = (theme) =>
    createStyles({
        root: {
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
        },
    });

class CategoriesContainer extends React.Component {
    componentDidMount() {
        this.props.getCategories();
    }
    render() {
        const { categories = [] } = this.props;

        const categoryCards = categories.map((category) => <CategoryCard category={category} key={category.id} />);

        const { classes } = this.props;
        return (
            <Grid className={classes.root} container spacing={16}>
                {categoryCards}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.data,
    fetching: state.categories.fetching,
});

const dispatchToProps = {
    getCategories,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(CategoriesContainer));

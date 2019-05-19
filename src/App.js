import React from "react";
import { Route } from "react-router-dom";
import CategoriesContainer from "./components/CategoriesContainer";
import ItemsContainer from "./components/ItemsContainer";
import ItemViewContainer from "./components/ItemViewContainer";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import { createStyles, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getItems, getCategories } from "./redux/actions";
import Page404 from "./components/Page404";

const styles = () =>
    createStyles({
        root: { display: "flex", flexDirection: "column", height: "100vh" },
        routeContainer: {
            flex: "1 1 auto",
            overflowY: "auto",
            overflowX: "hidden",
        },
    });

class App extends React.Component {
    componentDidMount() {
        const { itemsFetched, getItems, categoriesFetched, getCategories } = this.props;
        !itemsFetched && getItems();
        !categoriesFetched && getCategories();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <Breadcrumbs />
                <div className={classes.routeContainer}>
                    <Route exact path="/" component={CategoriesContainer} />
                    <Route exact path="/category/:id" component={ItemsContainer} />
                    <Route exact path="/item/:id" component={ItemViewContainer} />
                    <Route component={Page404}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categoriesFetched: state.categories.fetched,
    itemsFetched: state.items.fetched,
});

const dispatchToProps = {
    getItems,
    getCategories,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(App));

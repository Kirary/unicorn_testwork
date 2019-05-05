import React from "react";
import { Route } from "react-router-dom";
import CategoriesContainer from "./components/CategoriesContainer";
import ItemsContainer from "./components/ItemsContainer";
import ItemView from "./components/ItemView/index";
import Header from "./components/Header";
import { createStyles, withStyles } from "@material-ui/core";

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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <div className={classes.routeContainer}>
                    <Route exact path="/" component={CategoriesContainer} />
                    <Route exact path="/category/:id" component={ItemsContainer} />
                    <Route exact path="/item/:id" component={ItemView} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);

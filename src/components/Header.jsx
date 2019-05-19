import React from "react";
import { Paper, createStyles, withStyles } from "@material-ui/core";
import CartButton from "./CartButton";

const styles = (theme) =>
    createStyles({
        root: {
            height: 70,
            flex: "none",
            borderRadius: 0,
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            display: "flex",
            padding: `0 ${theme.spacing.unit * 4}px`,
            alignItems: "center",
        },
        cartContainer: {
            marginLeft: "auto",
        },
    });

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <div>header</div>
                <div className={classes.cartContainer}>
                    <CartButton />
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(Header);

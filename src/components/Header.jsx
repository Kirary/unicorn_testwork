import React from "react";
import { Paper, createStyles, withStyles } from "@material-ui/core";

const styles = (theme) =>
    createStyles({
        root: {
            height: 70,
            flex: "none",
            borderRadius: 0,
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
        },
    });

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return <Paper className={classes.root}>
        header 
        </Paper>;
    }
}

export default withStyles(styles)(Header);

import React from "react";
import { createStyles, withStyles, IconButton } from "@material-ui/core";
import LeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import RightIcon from "@material-ui/icons/KeyboardArrowRight";

const styles = (theme) =>
    createStyles({
        root: { 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        value: {
            minWidth: 20,
        },
    });

class Counter extends React.Component {
    render() {
        const { value, classes } = this.props;
        return (
            <div className={classes.root}>
                <IconButton onClick={this.handleCounterChange(-1)}>
                    <LeftIcon />
                </IconButton>
                <span className={classes.value}>{value}</span>
                <IconButton onClick={this.handleCounterChange(1)}>
                    <RightIcon />
                </IconButton>
            </div>
        );
    }

    handleCounterChange = (delta) => () => {
        const { value, maxCount } = this.props;
        const newValue = value + delta;

        if (newValue >= 0 && newValue <= maxCount) {
            this.props.onChange(newValue);
        }
    };
}

export default withStyles(styles)(Counter);

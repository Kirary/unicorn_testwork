import React from "react";
import { createStyles, withStyles, Typography, IconButton } from "@material-ui/core";
import { updateItemInCart, deleteFromCart } from "../redux/actions";
import { connect } from "react-redux";
import Counter from "./Counter";
import DeleteIcon from "@material-ui/icons/Clear";

const styles = (theme) =>
    createStyles({
        root: { display: "flex", alignItems: "center" },
        autoMargin: { marginLeft: "auto" },
    });

class ItemInCart extends React.Component {
    render() {
        const { item, amount, classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography>{item.title}</Typography>
                <div className={classes.autoMargin} />
                <Counter value={amount} onChange={this.onCounterChange(item.id)} maxCount={item.quantity} />
                <IconButton onClick={this.onItemDelete}>
                    <DeleteIcon color="error" />
                </IconButton>
            </div>
        );
    }

    onCounterChange = (id) => (value) => {
        this.props.updateItemInCart(id, value);
    };

    onItemDelete = () => {
        this.props.deleteFromCart(this.props.item.id);
    };
}

const mapStateToProps = () => {};

const dispatchToProps = {
    updateItemInCart,
    deleteFromCart,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(ItemInCart));

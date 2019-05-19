import React from "react";
import { createStyles, withStyles, Paper } from "@material-ui/core";
import { connect } from "react-redux";

const styles = (theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "gold",
            color: "black",
            height: 30,
            minWidth: 100,
        },
        paddings: {
            padding: `0 ${theme.spacing.unit}px`,
        }
    });

class CartButton extends React.Component {
    render() {
        const { classes, items, itemsInCart } = this.props;

        let amount = 0;
        let cost = 0;
        for (const itemId in itemsInCart) {
            if (itemsInCart.hasOwnProperty(itemId)) {
                const itemAmount = itemsInCart[itemId];
                const item = items[itemId];
                amount += itemAmount;
                cost += itemAmount * item.price;
            }
        }
        cost = Math.round((cost * 100))/ 100;

        return (
            <Paper className={classes.root}>
                    <span className={classes.paddings}>Сумма: {cost}</span>
                    <span className={classes.paddings}>Кол-во: {amount}</span>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByItemId,
    itemsInCart: state.itemsInCart,
});

export default connect(mapStateToProps)(withStyles(styles)(CartButton));

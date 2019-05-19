import React from "react";
import { createStyles, withStyles, Button, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";

const styles = (theme) =>
    createStyles({
        root: {
            minWidth: 300,
            padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        },
        bottomSection: {
            paddingTop: theme.spacing.unit,
            display: "flex",
        },
        marginAuto: {
            marginLeft: "auto",
        },
    });

class Cart extends React.Component {
    render() {
        const { items, itemsInCart, classes } = this.props;

        let itemRows = [];
        let amount = 0;
        let cost = 0;

        for (const itemId in itemsInCart) {
            if (itemsInCart.hasOwnProperty(itemId)) {
                const itemAmount = itemsInCart[itemId];
                const item = items[itemId];
                amount += itemAmount;
                cost += Math.round(100 * item.price) * itemAmount;
                itemRows.push(<ItemInCart item={item} amount={itemAmount} key={itemId} />);
            }
        }

        cost = cost / 100;
        const isEmpty = itemRows.length === 0;

        return (
            <div className={classes.root}>
                {isEmpty ? "Корзина пуста" : itemRows}
                <Divider />
                <div className={classes.bottomSection}>
                    <div>
                        <div>Кол-во: {amount}</div>
                        <div>Сумма: {cost}</div>
                    </div>
                    <Button className={classes.marginAuto} variant="contained" color="primary" disabled={isEmpty}>
                        Оплатить
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByItemId,
    itemsInCart: state.itemsInCart,
});

export default connect(mapStateToProps)(withStyles(styles)(Cart));

import React from "react";
import { createStyles, withStyles, Paper, Popover } from "@material-ui/core";
import { connect } from "react-redux";
import Cart from "./Cart";

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
        },
    });

class CartButton extends React.Component {
    state = {
        anchorEl: null,
    };
    render() {
        const { classes, items, itemsInCart } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        let amount = 0;
        let cost = 0;
        for (const itemId in itemsInCart) {
            if (itemsInCart.hasOwnProperty(itemId)) {
                const itemAmount = itemsInCart[itemId];
                const item = items[itemId];
                amount += itemAmount;
                cost += Math.round(100 * item.price) * itemAmount;
            }
        }
        cost = cost / 100;

        return (
            <>
                <Paper className={classes.root} onClick={this.handleClick}>
                    <span className={classes.paddings}>Сумма: {cost}</span>
                    <span className={classes.paddings}>Кол-во: {amount}</span>
                </Paper>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <Cart />
                </Popover>
            </>
        );
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByItemId,
    itemsInCart: state.itemsInCart,
});

export default connect(mapStateToProps)(withStyles(styles)(CartButton));

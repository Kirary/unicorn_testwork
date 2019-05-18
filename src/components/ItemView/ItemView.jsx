import React from "react";
import { Button, Paper, withStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { setSelectedCategoryId, setSelectedItemId, addItemToCart } from "../../redux/actions";
import Counter from "../Counter";
import styles from "./styles";

class ItemView extends React.Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        const { selectedCategoryId, setSelectedCategoryId, setSelectedItemId, selectedItemId, item } = this.props;
        const id = item.id;
        !selectedItemId && setSelectedItemId(id);
        !selectedCategoryId && setSelectedCategoryId(item.category_id);
    }

    render() {
        const { item, classes, itemsInCart } = this.props;
        const amountInCart = itemsInCart[item.id] ? itemsInCart[item.id] : 0;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div className={classes.header}>
                        <div className={classes.itemImg} />
                        <div className={classes.itemControls}>
                            <Counter
                                value={this.state.counter}
                                onChange={this.onCounterChange}
                                maxCount={item.quantity - amountInCart}
                            />
                            <Button variant="contained" color="primary" className={classes.button} size="large" onClick={this.buyHandler} disabled={this.state.counter === 0}>
                                Купить
                            </Button>
                        </div>
                    </div>
                    <div className={classes.description}>
                        <Typography variant="h3">{item.title} </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat magna ut lacinia
                            interdum. Etiam ipsum mauris, porttitor non felis ut, egestas dictum arcu. Nullam commodo
                            pellentesque turpis, vel aliquam leo imperdiet nec. Integer pellentesque auctor lacus sed
                            efficitur. Morbi a erat mattis tellus auctor efficitur. Cras semper iaculis lorem, id
                            consectetur lorem varius quis. Ut feugiat odio at imperdiet hendrerit. Vivamus a maximus ex.
                            Donec tincidunt commodo viverra. Praesent elementum porta lorem non cursus. Curabitur
                            finibus maximus turpis a eleifend. In elementum orci eu quam vehicula viverra. In ut
                            placerat justo.
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }

    onCounterChange = (count) => {
        this.setState({ counter: count });
    };

    buyHandler = () => {
        this.props.addItemToCart(this.props.item.id, this.state.counter);
        this.setState({counter: 0});
    }
}

const mapStateToProps = (state) => ({
    selectedCategoryId: state.selectedCategoryId,
    selectedItemId: state.selectedItemId,
    itemsInCart: state.itemsInCart,
});

const dispatchToProps = {
    setSelectedCategoryId,
    setSelectedItemId,
    addItemToCart,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(ItemView));

import React from "react";
import { Button, Paper, withStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions";
import Counter from "../Counter";
import styles from "./styles";

class ItemView extends React.Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        !this.props.fetched && this.props.getItems();
    }

    render() {
        const { items, classes, match, fetched } = this.props;
        const currentItem = items[match.params.id];
        return (
            fetched && (
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <div className={classes.header}>
                            <div className={classes.itemImg} />
                            <div className={classes.itemControls}>
                                <Counter value={this.state.counter} onChange={this.onCounterChange} maxCount={currentItem.quantity} />
                                <Button variant="contained" color="primary" className={classes.button} size="large">
                                    Купить
                                </Button>
                            </div>
                        </div>
                        <div className={classes.description}>
                            <Typography variant="h3">{currentItem.title} </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat magna ut
                                lacinia interdum. Etiam ipsum mauris, porttitor non felis ut, egestas dictum arcu.
                                Nullam commodo pellentesque turpis, vel aliquam leo imperdiet nec. Integer pellentesque
                                auctor lacus sed efficitur. Morbi a erat mattis tellus auctor efficitur. Cras semper
                                iaculis lorem, id consectetur lorem varius quis. Ut feugiat odio at imperdiet hendrerit.
                                Vivamus a maximus ex. Donec tincidunt commodo viverra. Praesent elementum porta lorem
                                non cursus. Curabitur finibus maximus turpis a eleifend. In elementum orci eu quam
                                vehicula viverra. In ut placerat justo.
                            </Typography>
                        </div>
                    </Paper>
                </div>
            )
        );
    }

    onCounterChange = (count) => {
        this.setState({ counter: count });
    };
}

const mapStateToProps = (state) => ({
    items: state.items.dictionaryByItemId,
    fetched: state.items.fetched,
    fetching: state.items.fetching,
    failed: state.items.failed,
});

const dispatchToProps = {
    getItems,
};

export default connect(
    mapStateToProps,
    dispatchToProps,
)(withStyles(styles)(ItemView));

import React from "react";
import { Grid, Paper, createStyles, withStyles, Typography } from "@material-ui/core";
import { history } from "../Root";

const styles = (theme) =>
    createStyles({
        root: {},
        card: {
            height: 300,
            padding: theme.spacing.unit * 2,
            textAlign: "center",
            fontSize: 20,
            userSelect: "none",
            transition: "background 200ms",
            "&:hover": {
                background: theme.palette.action.hover,
            },
        },
    });

const ItemCard = ({ item, classes }) => (
    <Grid item xs={12} sm={4} md={3} className={classes.root} onClick={handleCardClick(item.id)}>
        <Paper className={classes.card}>
            <Typography variant="h5">{item.title}</Typography>
        </Paper>
    </Grid>
);

const handleCardClick = (id) => () => {
    history.push(`/item/${id}`);
};

export default withStyles(styles)(ItemCard);

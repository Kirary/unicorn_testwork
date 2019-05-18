import React from "react";
import { Grid, Paper, createStyles, withStyles, Typography } from "@material-ui/core";

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

const CategoryCard = ({ category, classes, onClick }) => (
    <Grid item xs={12} sm={6} md={4} className={classes.root} onClick={onClick}>
        <Paper className={classes.card}>
            <Typography variant="h5">{category.title} </Typography>
        </Paper>
    </Grid>
);

export default withStyles(styles)(CategoryCard);

import React from "react";
import { Paper, createStyles, withStyles, Typography } from "@material-ui/core";
import { Link} from "react-router-dom";

const styles = (theme) =>
    createStyles({
        root: {
            margin: "20vh auto",
            width: 400,
            textAlign: "center",
            padding: theme.spacing.unit * 4,
        },
    });

const Page404 = ({ classes }) => (
        <Paper className={classes.root}>
            <Typography variant="h2">404</Typography>
            <Typography variant="h5">Страница не найдена</Typography>
            <Link to="/">Вернуться в каталог</Link>
        </Paper>
);

export default withStyles(styles)(Page404);

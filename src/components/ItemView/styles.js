import { createStyles } from "@material-ui/core";

const styles = (theme) =>
    createStyles({
        root: {
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
            height: "100%",
            boxSizing: "border-box",
        },
        paper: {
            height: "100%",
            padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
            boxSizing: "border-box",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        },
        contentContainer: {
            display: "flex",
            flexDirection: "column",
        },
        header: {
            flex: "none",
            height: 300,
            display: "flex",
            paddingBottom: theme.spacing.unit * 4,
        },
        itemImg: {
            background: theme.palette.grey[300],
            flex: "5 1 auto",
        },
        itemControls: {
            flex: "1 1 auto",
            width: 200,
            minWidth: 200,
            alignSelf: "center",
            padding: theme.spacing.unit * 4,
            textAlign: "center",
        },
        button: {
            textTransform: "none",
        },
        description: {
            flex: "1 1 auto",
            overflow: "auto",
        },
    });

export default styles;

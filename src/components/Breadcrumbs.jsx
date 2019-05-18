import React from "react";
import { createStyles, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const styles = (theme) =>
    createStyles({
        root: {
            flex: "none",
            padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 4}px`,
            background: theme.palette.primary.dark,
            height: 35,
            boxSizing: 'border-box',
            color: "white",
            "& a": {
                color: theme.palette.primary.light,
                textDecoration: "none",
            }
        },
        spaceAround: {
            padding: theme.spacing.unit,
        }
    });

class Breadcrumbs extends React.Component {
    render() {
        const { selectedCategoryId, selectedItemId, classes, categories, items } = this.props;

        const categoryName =
            selectedCategoryId && categories && categories[selectedCategoryId]
                ? categories[selectedCategoryId].title
                : undefined;
        const itemName = selectedItemId && items && items[selectedItemId] ? items[selectedItemId].title : undefined;

        let categoryLink;
        if (categoryName) {
            if (itemName) {
                categoryLink = (
                    <>
                        <Link to={`/category/${selectedCategoryId}`}>{categoryName}</Link><span className={classes.spaceAround}>/</span>
                    </>
                );
            } else {
                categoryLink = `${categoryName}`;
            }
        }

        return (
            <div className={classes.root}>
                {categoryName && (
                    <>
                        <Link to="/">Каталог</Link><span className={classes.spaceAround}>/</span>
                    </>
                )}
                {categoryLink} {itemName}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const categoriesDictionaryById = {};
    state.categories.data.forEach((category) => {
        categoriesDictionaryById[category.id] = category;
    });
    return {
        selectedCategoryId: state.selectedCategoryId,
        selectedItemId: state.selectedItemId,
        categories: categoriesDictionaryById,
        items: state.items.dictionaryByItemId,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Breadcrumbs));

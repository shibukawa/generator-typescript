// react/next/redux
import Link from "next/link";
import React, { SFC } from "react";

// material-ui
import Button from "@material-ui/core/Button";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => {
    return createStyles({
        root: {
            textAlign: "center",
            paddingTop: theme.spacing.unit * 20
        }
    });
};

const About: SFC<WithStyles<typeof styles>> = props => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Typography variant="display1" gutterBottom={true}>
                Material-UI
            </Typography>
            <Typography variant="subheading" gutterBottom={true}>
                about page
            </Typography>
            <Typography gutterBottom={true}>
                <Link href="/">
                    <a>Go to the main page</a>
                </Link>
            </Typography>
            <Button variant="contained" color="primary">
                Do nothing button
            </Button>
        </div>
    );
};

export default withStyles(styles)(About);

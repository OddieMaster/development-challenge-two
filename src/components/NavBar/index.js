import React from "react";
import {
    Link,
    AppBar,
    Toolbar,
    IconButton,
    Container,
    useMediaQuery,
    Menu,
    MenuItem,
    Box,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Medcloud from "../../assets/medcloud.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: "1",
    },

    appBar: {
        background: "  rgba(0,0,0,0.1)",
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: "white",
        alignContent: "center",
        padding: "0px 100px 0px 40px",
        [theme.breakpoints.down("lg")]: {
            padding: "0px 40px 0px 25px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 5px 0px 5px",
        },
    },
    button: {
        color: "#D0CBD5",
        paddingLeft: "20px",
        paddingRight: "20px",
    },

    text: {
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "'Dosis'",
        color: "#757575;",
        textTransform: "uppercase",
        textDecoration: "none !important",
        position: "relative",
        display: "block",
        "&:hover": {
            color: "black !important",
        },
        [theme.breakpoints.down("425")]: {
            color: "white",
        },
    },

    VertIcon: {
        color: "#757575",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-end",
        },
    },

    IconButton: {
        backgroundColor: "#ebebeb",
        padding: "15px",
        marginLeft: "10px",
        "&:hover": {
            boxShadow: " 0 0 10px #00a8ff",
            fontSize: 175,
        },
    },

    container: {
        display: "flex",
        justifyContent: "flex-end",
    },

    containerButtons: {
        display: "flex;",
        justifyContent: "space-between",
        flexDirection: "row;",
        [theme.breakpoints.down("md")]: {
            padding: "0",
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "space-around",
        },
    },
}));

const ITEM_HEIGHT = 48;

function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("1023"));
    const isMobile = useMediaQuery(theme.breakpoints.down("426"));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const MenuItens = [
        {
            id: 1,
            href: "/",
            title: "Home",
        },
        {
            id: 2,
            href: "http://localhost:3000/patients",
            title: "Patients",
        },
        {
            id: 3,
            href: "http://localhost:3000/insert",
            title: "Insert",
        },
        {
            id: 4,
            href: "http://localhost:3000/doctors",
            title: "Doctors",
        },
        {
            id: 5,
            href: "http://localhost:3000/exams",
            title: "Exams",
        },
        {
            id: 6,
            href: "https://www.medcloud.com.br/",
            title: "Official Website",
        },
    ];

    return (
        <div className={classes.grow}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {isMobile ? (
                        <>
                            <Link href="">
                                <img src={Medcloud} alt="logo" />
                            </Link>
                            <Container className={classes.containerButtons}>
                                <IconButton
                                    color="primary"
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MenuIcon
                                        className={classes.VertIcon}
                                        style={{ fontSize: 30 }}
                                    />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: "50ch",
                                            background: "black",
                                        },
                                    }}
                                >
                                    {MenuItens.map((row) => (
                                        <div key={row.id}>
                                            <MenuItem onClick={handleClose}>
                                                <Link
                                                    href={row.href}
                                                    className={classes.text}
                                                    underline="none"
                                                >
                                                    {row.title}
                                                </Link>
                                            </MenuItem>
                                        </div>
                                    ))}
                                </Menu>
                                <IconButton
                                    color="primary"
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick2}
                                >
                                    <MoreVertIcon
                                        className={classes.VertIcon}
                                        style={{ fontSize: 22 }}
                                    />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl2}
                                    keepMounted
                                    open={open2}
                                    onClose={handleClose2}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: "20ch",
                                            background: "black",
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose2}>
                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://www.facebook.com/MedcloudBR/"
                                            target="_blank"
                                            rel="noopener"
                                            color="primary"
                                            aria-label="facebook"
                                        >
                                            <FacebookIcon />
                                        </IconButton>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose2}>
                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://www.instagram.com/Medcloud_br/"
                                            target="_blank"
                                            rel="noopener"
                                            color="secondary"
                                            aria-label="instagram"
                                        >
                                            <InstagramIcon />
                                        </IconButton>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose2}>
                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://br.linkedin.com/company/Medcloud"
                                            target="_blank"
                                            rel="noopener"
                                            color="inherit"
                                            aria-label="linkedin"
                                            style={{ color: lightBlue[500] }}
                                        >
                                            <LinkedInIcon />
                                        </IconButton>
                                    </MenuItem>
                                </Menu>
                            </Container>
                        </>
                    ) : (
                        <>
                            {isMatch ? (
                                <>
                                    <Link href="">
                                        <img src={Medcloud} alt="Medcloud" />
                                    </Link>
                                    <Container
                                        className={classes.containerButtons}
                                    >
                                        {MenuItens.map((row) => (
                                            <Box key={row.id} m={2} pt={3}>
                                                <Link
                                                    href={row.href}
                                                    className={classes.text}
                                                    underline="none"
                                                >
                                                    {row.title}
                                                </Link>
                                            </Box>
                                        ))}
                                    </Container>
                                    <IconButton
                                        color="primary"
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon
                                            className={classes.VertIcon}
                                            style={{ fontSize: 30 }}
                                        />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                                background: "black",
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <IconButton
                                                className={classes.IconButton}
                                                href="https://www.facebook.com/MedcloudBR/"
                                                target="_blank"
                                                rel="noopener"
                                                color="primary"
                                                aria-label="facebook"
                                            >
                                                <FacebookIcon />
                                            </IconButton>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IconButton
                                                className={classes.IconButton}
                                                href="https://www.instagram.com/Medcloud_br/"
                                                target="_blank"
                                                rel="noopener"
                                                color="secondary"
                                                aria-label="instagram"
                                            >
                                                <InstagramIcon />
                                            </IconButton>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IconButton
                                                className={classes.IconButton}
                                                href="https://br.linkedin.com/company/Medcloud"
                                                target="_blank"
                                                rel="noopener"
                                                color="inherit"
                                                aria-label="linkedin"
                                                style={{
                                                    color: lightBlue[500],
                                                }}
                                            >
                                                <LinkedInIcon />
                                            </IconButton>
                                        </MenuItem>
                                    </Menu>{" "}
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <Link href="">
                                        <img src={Medcloud} alt="logo" />
                                    </Link>
                                    <Container
                                        className={classes.containerButtons}
                                    >
                                        {MenuItens.map((row) => (
                                            <Box m={2} pt={3} key={row.id}>
                                                <Link
                                                    href={row.href}
                                                    className={classes.text}
                                                    underline="none"
                                                >
                                                    {row.title}
                                                </Link>
                                            </Box>
                                        ))}
                                    </Container>
                                    <Container className={classes.container}>
                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://www.facebook.com/MedcloudBR/"
                                            target="_blank"
                                            rel="noopener"
                                            color="primary"
                                            aria-label="facebook"
                                        >
                                            <FacebookIcon />
                                        </IconButton>

                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://www.instagram.com/Medcloud_br/"
                                            target="_blank"
                                            rel="noopener"
                                            color="secondary"
                                            aria-label="instagram"
                                        >
                                            <InstagramIcon />
                                        </IconButton>

                                        <IconButton
                                            className={classes.IconButton}
                                            href="https://br.linkedin.com/company/Medcloud"
                                            target="_blank"
                                            rel="noopener"
                                            color="inherit"
                                            aria-label="linkedin"
                                            style={{ color: lightBlue[500] }}
                                        >
                                            <LinkedInIcon />
                                        </IconButton>
                                    </Container>
                                </>
                            )}
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;

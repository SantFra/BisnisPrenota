import {  Burger, ColorSchemeProvider, Container, createStyles, Group, MantineProvider, Header } from "@mantine/core";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LightDarkButton from "../Components/LightDarkButton";

//css config style page 
const useStyles = createStyles((theme) => ({

    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
  
      [theme.fn.smallerThan('ms')]: {
        flexDirection: 'column',
      },
    },
  
    linksHeader: {
      width: 260,
  
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    social: {
      width: 260,
  
      [theme.fn.smallerThan('sm')]: {
        width: 'auto',
        marginLeft: 'auto',
      },
    },
  
    burger: {
      marginRight: theme.spacing.md,
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  
    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },

    footer: {
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      
      [theme.fn.smallerThan('sm')]: {
        width: 'auto',
        marginLeft: 'auto',
      },

      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    },


  }));

function MainLayout () {

    //--- lista dei link 
    const linksHeader = [
        {link:"/", label:"Home"},
        {link:"/app", label:"App"},
    ]

    const linksFooter =[
      {link:"/AboutUs", label:"Credits"},
      {link:"/ContactUs", label:"Contact us"},
    ]


    const { classes, cx } = useStyles();

    //--- bottone light / dark theme
    const [colorScheme, setColorScheme] = useState ('light');

    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    //--- Focus bottoni su pagina corrente
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const [active, setActive] = useState(linksHeader[0].link || linksFooter[0].link);
    
    //--- Crea gli item del menu
    const itemsHeader = linksHeader.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </Link>
      ));

      const itemsFooter = linksFooter.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </Link>
      ));
      

    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} >
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS >
                <Header>
                    <Container className={classes.inner}>
                        {/* <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} /> */}
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            title={title}
                            size="sm"
                            className={classes.burger}
                        />
                        <Group className={classes.linksHeader} spacing={5}>
                            {itemsHeader}
                        </Group>
                        
                        {/* Logo  */}
                        
                        <LightDarkButton/>

                    </Container>
                </Header>

                <div className={classes.footer}>
                  <Container className={classes.inner}>
                    <span>Logo</span>
                    <Group className={classes.links}>{itemsFooter}</Group>
                  </Container>
                </div>

                <Outlet/>
                
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MainLayout;
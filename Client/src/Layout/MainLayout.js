import { Button, Burger, ColorSchemeProvider, Container, createStyles, Group, MantineProvider, Header, Footer, Avatar  } from "@mantine/core";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { IconLogin } from '@tabler/icons';
import img from "../logo.png"

import LightDarkButton from "../Components/LightDarkButton";
import { useLocalStorage } from "@mantine/hooks";

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

    logInButton: {
      position: "fixed",
      alignItems: "right",
    }


  }));

function MainLayout () {

    // const navigate = useNavigate();

    //--- lista dei link 
    const linksHeader = [
        {link: "/", label: "Home"},
        {link: "/GridView", label: "Tabella"},
        {link: "/MapView", label: "Mappa"},
    ]

    const linksFooter = [
      {link: "/AboutUs", label: "Credits"},
      {link: "/ContactUs", label: "Contact us"},
    ]

    const { classes, cx } = useStyles();

    //--- bottone light / dark theme
    const [colorScheme, setColorScheme] = useLocalStorage({
      key: 'mantine-color-scheme',
      defaultValue: 'dark',
      getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    //--- Focus bottoni su pagina corrente
    let URLlocation = useLocation().pathname

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    const [active, setActive] = useState( URLlocation || URLlocation);
    
    //--- Crea gli item del menu
    const itemsHeader = linksHeader.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={ cx(classes.link, { [classes.linkActive]: active === link.link })}
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
                        <Group className={classes.linksHeader} spacing={5}>{itemsHeader}</Group>
                        
                        <Avatar src={img}></Avatar>

                        <Group>
                          <LightDarkButton/>
                          {/* Esempio bottone per navigazione con react router e mantine */}
                          <Button component={Link} to="/login" leftIcon={<IconLogin size={20} />} >Log in</Button> 
                        </Group>
                    </Container>
                </Header>

                <Outlet/>

                {/* <div className={classes.footer}> */}
                <Footer>
                  <Container className={classes.inner}>
                    <Avatar src={img}></Avatar>
                    <Group className={classes.links}>{itemsFooter}</Group>
                  </Container>
                </Footer>
                {/* </div> */}
                
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default MainLayout;
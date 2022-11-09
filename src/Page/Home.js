import { Container, Paper, Title, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Home.css';


function Home (props) {
    const link = [
        {link: "/GridView", label: "Prenota ora !"},
    ]


    const [setActive] = useState(link[0].link);

    return(
        <Container size={720} my={200}>
                
            <Title align="justify" paddingTop="100">
                Prenota ora la tua classe !
            </Title>

            <Paper
                shadow="xl"
                p="md"
                withBorder
            >
                Prenotazione
                <Text>
                     Prenota la tua classe qui
                </Text>
                <Button>Inizia subito !</Button>
            </Paper>
            <br/><br/>

            <Paper
                shadow="xl" 
                p="md"
                withBorder
            > 
                Visualizza mappa
                <Text>
                    Visualizza la mappa dell'istituto
                </Text>

                <Button>
                    Visualizza qui
                </Button>
            </Paper>
            <br/><br/>
                
            <Paper
                shadow="xl" 
                p="md"
                withBorder
            > 
                Impostazioni account

                <Text>
                    Gestisci il tuo account
                </Text>

                <Button>
                    Impostazioni
                </Button>
            </Paper>



                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
        </Container>
    )
}
export default Home;
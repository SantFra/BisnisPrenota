import { Container, Paper, Title, Button, Text } from "@mantine/core";
import './Home.css';


function Home (props) {

    return(
        <Container size={720} my={250}>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            <Paper 
                radius="md"
                p="md"
                withBorder {...props}
            >
                <Title align="center">Class Booking ti aiuta a prenotare la classe che vuoi per le tue lezioni</Title>
                <br/><br/><br/>

                <Text>
                    Prenota la tua classe 
                </Text>
                <p align="center">
                    <Button size="md">Prenota ora !</Button>
                </p>
                
            </Paper>


            
        </Container>
    )
}
export default Home;
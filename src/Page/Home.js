import { Blockquote, Image, Mark, Stack } from "@mantine/core";
import img from "../logo.png"

function Home () {
    return(
        <Stack align="center" sx={{padding:50}} >
            <Image radius="md"  width={500} height={500} src={img} />
            <Blockquote cite="– Forrest Gump">
                Prenota la tua classe! <br/>
                Per una visone di <Mark>CARS</Mark> più sicura 
            </Blockquote>
        </Stack>
    )
}
export default Home;
import { Button, Col, Container, Grid, NativeSelect, Space, Table } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Data from './data.json'

function GridView () {

    const rows = Data.data.map((row) => (
        <tr key={row.name}>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.company}</td>
        </tr>
    ));

    const [dateValue, setDateValue] = Date();

    return(
        <Container>

            <Grid sx={{padding:20}} align="center">
                <Col span={5}> <DatePicker placeholder="Data" /> </Col>
                <Col span={5}>  <NativeSelect data={['1', '2', '3', '4','5','6']} placeholder="Pick one"/> </Col>
                <Col span={2}> <Button variant="light" radius="xl"> Carica </Button> </Col>
            </Grid>

            <Table sx={{ minWidth: 700 }}>
                <thead>
                    <tr>
                        <th>ID Classe</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody> {rows} </tbody>
            </Table>
        </Container>
        
    )
}
export default GridView;
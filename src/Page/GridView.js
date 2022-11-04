import { Badge, Button, Col, Container, Grid, NativeSelect, Space, Table } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useEffect, useState } from "react";

function refreshPage() {
    window.location.reload(false);
  }

function GridView () {

    const [classes, setClasses] = useState([]);

    function getData (edPoint) {
        fetch(edPoint, {method: 'GET', redirect: 'follow'})
        .then(response  => response.json())
        .then(result => {
           setClasses(result)
        })
        .catch(error => console.log('error', error));
    }

    function setBooking ( classID ) {

        var raw = JSON.stringify({
            "class_id": classID,
            "teacher_name": "Ziliotto",
            "description": "prova di recupero",
            "date": "Fri Oct 14 2022 17:28:53 GMT+0200",
            "hours": [1]
          });

        var requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: raw,
            redirect: 'follow'
        };

        fetch("/classes/booking", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            refreshPage()
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getData("/classes")
    },[])

    const isBookingBadge = ( arr ) => {
        if(arr.length === 0){
            return (<Badge color={"green"} size="lg" >DISPONIBILE</Badge>)
        }else{
            return (<Badge color={"red"} size="lg" >NON DISPONIBILE</Badge>)
        }
    }
    
    function isBookingBotton ( arr, id ) {
        if(arr.length === 0){
            return (<Button onClick={ () => setBooking(id) }> Prenota </Button>)
        }else{
            return (<Button disabled > Prenota </Button>)
        }
    }

    function isPersona ( arr ) {
        if(arr.length !== 0){
            return arr[0].teacher_name
        }
    }

    const rows = classes.map((row) => (
        <tr key={row.class_id}>
          <td>{row.class_id}</td>
          <td> {isBookingBadge(row.Bookings)} </td>
          <td> {isBookingBotton(row.Bookings, row.class_id )} </td>
          <td> {isPersona(row.Bookings)} </td>
        </tr>
    ));

    return(
        <Container>
            <Grid sx={{padding:20}} align="center">
                <Col span={5}> <DatePicker placeholder="Data" /> </Col>
                <Col span={5}> <NativeSelect data={['1', '2', '3', '4','5','6','7','8']} placeholder="Pick one"/> </Col>
                <Col span={2}> <Button variant="light" radius="xl"> Carica </Button> </Col>
            </Grid>

            <Table sx={{ minWidth: 700 }}>
                <thead>
                    <tr>
                        <th>ID Classe</th>
                        <th></th>
                        <th>Prenota</th>
                        <th>Persona</th>
                    </tr>
                </thead>
                <tbody> {rows} </tbody>
            </Table>
        </Container>
        
    )
}
export default GridView;
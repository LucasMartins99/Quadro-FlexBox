/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';

import pt from 'date-fns/locale/pt';
import { format } from 'date-fns-tz';
import { Container, Header, Body, Atual, Table, TD, Text, H2 } from './styles';

function Home() {
    const day = format(new Date(), 'dd-MM-yyyy', { locale: pt });
    const [hora, setHoras] = useState(
        format(new Date(), 'HH:mm', {
            timeZone: 'America/Sao_Paulo',
        })
    );

    useEffect(() => {
        const id = setInterval(() => {
            setHoras(
                format(new Date(), 'HH:mm', {
                    timeZone: 'America/Sao_Paulo',
                })
            );
        }, 10000);
        return () => clearInterval(id);
    }, [hora]);
    return (
        <Container>
            <Header>
                <p>DATA: {day} </p>
                <p>HORA: {hora}</p>
            </Header>
            <Body>
                <p>
                    <strong>META MÊS: </strong> <Text t1p>240340</Text>
                </p>
                <p>
                    <strong>META ACUMULADA: </strong> <Text t1p>165298 </Text>
                </p>
                <Atual>
                    <H2>PRODUÇÃO ACUMULADA: 5496 peças</H2>
                    <H2>DIFERENÇA ACUMULADA: -12327 peças</H2>
                    <Table>
                        <thead>
                            <tr>
                                <th />
                                <th>Produção</th>
                                <th>Meta</th>
                                <th>Diferença</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Turno 1</td>
                                <TD t1p>4211</TD>
                                <TD t1p>3500</TD>
                                <TD t1p>711</TD>
                            </tr>
                            <tr>
                                <td>Turno 2</td>
                                <TD>2444</TD>
                                <TD t1p>3501</TD>
                                <TD>-1057</TD>
                            </tr>
                            <tr>
                                <td>Turno 3</td>
                                <TD>672</TD>
                                <TD t1p>1400</TD>
                                <TD>-728</TD>
                            </tr>
                            <tr>
                                <td>TOTAL DIA</td>
                                <TD>7327</TD>
                                <TD t1p>8401</TD>
                                <TD>-1074</TD>
                            </tr>
                        </tbody>
                    </Table>
                </Atual>
            </Body>
        </Container>
    );
}
export default Home;

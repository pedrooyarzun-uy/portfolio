import React from 'react'
import {Grid, Image, Header, Divider, Container} from 'semantic-ui-react'

export const Experience = () => {
    return (
        <div>
            <Grid style={{marginTop: '2rem'}}>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h2'>Experiencia</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={8} mobile={16}>
                        <Container text>
                            <Header as='h2' style={{fontSize: '2rem'}}>
                                Ferrovial 
                            </Header>
                            <div>
                                <p style={{fontSize: '17px', color: 'gray', textAlign: 'left'}}>
                                    Fecha: Abril 2022 - Actualidad
                                </p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', color: 'gray', textAlign: 'left'}}>
                                    Puesto: FullStack Developer
                                </p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', textAlign: 'left', marginTop: '15px'}}>
                                    Actualmente me encuentro en el desarrollo de un nuevo front end para la gestion de un telepeaje en Autopista Del Sol, Malaga. Estoy a cargo de todo el desarrollo del FrontEnd y la implementacion de las APIs para el mismo. 
                                </p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', color: 'gray', textAlign: 'left', marginTop: '15px'}}>
                                    Tecnologias usadas: React.js y Java. 
                                </p>
                            </div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column computer={6} mobile={16} floated='right'>
                        <Image bordered rounded size='large' src='./autopista-front.png' style={{marginTop: '2rem'}}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Divider
                            as='h4'
                            horizontal
                        >
                            Experiencia
                        </Divider>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={8} mobile={16}>
                        <Container text>
                            <Header as='h2' style={{fontSize: '2rem'}}>
                                Intendencia de Montevideo
                            </Header>
                            <div>
                                <p style={{fontSize: '17px', color: 'gray', textAlign: 'left'}}>
                                    Fecha: Noviembre 2020 - Abril 2021
                                </p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', color: 'gray', textAlign: 'left'}}>
                                    Puesto: Sub-Capataz
                                </p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', textAlign: 'left', marginTop: '15px'}}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis libero dolorum unde tempora dolores enim eligendi omnis rerum tenetur, officia architecto voluptas rem voluptate, aliquid quas nisi? Incidunt, nisi.
                                </p>
                            </div>
                        </Container>
                    </Grid.Column>
                    <Grid.Column computer={6} mobile={16} floated='right'>
                        <Image bordered rounded size='large' src='./intendencia.jpg' style={{marginTop: '2rem'}}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

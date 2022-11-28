import React from 'react'
import {Container, Grid, Header, } from 'semantic-ui-react'

export const Education = () => {
    return (
        <div style={{backgroundColor: '#1B1C1D', color: 'white', marginTop: '2rem'}} id='education'>
            <Grid columns='equal' stackable style={{paddingBottom: '2rem'}}>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h2' style={{fontSize: '2rem', color: 'white'}}>
                            Educación
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Container text>
                            <Header as='h3' style={{color: 'white'}}>
                                Jóvenes a Programar 
                            </Header>
                            <p style={{fontSize: '17px'}}>
                                <div>
                                    <p style={{fontSize: '17px', color: 'white', textAlign: 'left'}}>Fecha: Marzo 2022 - Noviembre 2022</p>
                                </div>
                                <div>
                                    <p style={{fontSize: '17px', color: 'white', textAlign: 'left'}}>Titulo: Desarrollo Web</p>
                                </div>
                                <div>
                                    <p style={{fontSize: '17px', textAlign: 'left', marginTop: '15px'}}>
                                        Durante la cursada de Jovenes a Programar opte por la especializacion en desarrollo web. En esta trabajamos con multiples herramientas como: JavaScript, Bootstrap, Node JS, CSS, HTML y muchas mas. Durante la especializacion estuvimos a cargo del desarrollo de un sistema de compras web donde fuimos poniendo a prueba todas estas habilidades que fuimos aprendiendo. 
                                    </p>
                                </div>
                            </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Container text>
                            <Header as='h3' style={{color: 'white'}}>
                                Universidad ORT 
                            </Header>
                            <div>
                                <p style={{fontSize: '17px', color: 'white', textAlign: 'left'}}>Fecha: Agosto 2022 - Actualidad</p>    
                            </div>
                            <div>
                                <p style={{fontSize: '17px', color: 'white', textAlign: 'left'}}>Titulo: Licenciatura en Sistemas</p>
                            </div>
                            <div>
                                <p style={{fontSize: '17px', textAlign: 'left', marginTop: '15px'}}>
                                    Actualmente cursando licenciatura en sistemas en el primer semestre.
                                </p>
                            </div>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Container text>
                            <Header as='h3' style={{color: 'white'}}>Bachillerato en Informática</Header>
                            <p style={{fontSize: '17px'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo inventore doloremque quisquam accusantium unde perspiciatis, eos ut velit magnam alias, nostrum, nulla officiis dignissimos necessitatibus. Ducimus ullam nam laboriosam!
                                Reiciendis, sunt odit ut blanditiis ex itaque enim ipsum! Atque, totam incidunt, nostrum tenetur aliquid labore minima fuga quae sequi temporibus magni debitis ducimus necessitatibus a? Voluptate magni harum aperiam?
                                Cum voluptatibus natus doloribus ipsam a. Amet, asperiores inventore voluptates fuga esse tenetur laborum in ratione dolorem. Accusantium qui alias mollitia quaerat fugiat assumenda fugit excepturi minus non. Aperiam, illum.
                            </p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

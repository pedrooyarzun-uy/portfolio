import React from 'react'
import {Grid, Card as CardSemantic, Header} from 'semantic-ui-react'
import { messages_es } from '../resources/messages_es'
import { Card } from './Card'

export const Portfolio = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <Grid columns='equal' style={{marginLeft: '2rem', marginRight: '1rem'}} stackable>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Header as='h2'>Mi Portfolio</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <CardSemantic.Group itemsPerRow='3' stackable>
                            <Card
                                title={messages_es.cardTitle1}
                                description={messages_es.cardDescription1}
                                date={messages_es.cardDate1}
                                image='./github-logo.jpg'
                                link='https://github.com/jpilsoftware-uy/chat-institucional'
                            />

                            <Card
                                title={messages_es.cardTitle2}
                                description={messages_es.cardDescription2}
                                date={messages_es.cardDate2}
                                image='./github-logo.jpg'
                                link='https://github.com/pedrooyarzun-uy/pekardo-bot'
                            />
                            <Card
                                title={messages_es.cardTitle3}
                                description={messages_es.cardDescription3}
                                date={messages_es.cardDate3}
                                image='./github-logo.jpg'
                                link='https://github.com/pedrooyarzun-uy/pedrooyarzun-uy.github.io'
                            />
                        </CardSemantic.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

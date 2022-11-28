import React from 'react'
import {Grid, Image, Header, Button, Container} from 'semantic-ui-react'
import { messages_es } from '../resources/messages_es'

export const AboutMe = () => {
    return(
        <div>
            <Grid stackable verticalAlign='middle' style={{marginTop: '2rem'}}>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Container text>
                            <Header as='h2' style={{fontSize: '2rem'}}>
                                {messages_es.whoTitle}
                            </Header>
                        
                            <p style={{fontSize: '17px'}}>
                                {messages_es.whoText} 
                            </p>
                            <Header as='h2' style={{fontSize: '2rem'}}>
                                {messages_es.aboutTitle}
                            </Header>
                            <p style={{fontSize: '17px'}}>
                                {messages_es.aboutText1}
                            </p>
                            <p style={{fontSize: '17px'}}>
                                {messages_es.aboutText2}
                            </p>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={6} floated='right'>
                        <Image bordered circular size='medium' src='./me.jpg'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center'>
                        <Button>lorem ipsum</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

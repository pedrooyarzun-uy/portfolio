import React, {useState} from 'react'
import {Grid, Menu} from 'semantic-ui-react'


export const NavBar = ({children}) => {
    
    const [activeItem, setActiveItem] = useState('aboutme')

    const onItemClick = (item) => {
        setActiveItem(item)
    }

    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Menu pointing secondary color='teal' stackable>
                            <Menu.Item
                                name='Sobre mi'
                                onClick={() => {onItemClick('aboutme')}}
                                active={activeItem === 'aboutme'}
                            />
                            <Menu.Item
                                name='educacion'
                                onClick={() => {onItemClick('education')}}
                                active={activeItem === 'education'}
                                href='#education'
                            />
                            <Menu.Item
                                name='mi portfolio'
                                onClick={() => {onItemClick('myportfolio')}}
                                active={activeItem === 'myportfolio'}
                            />
                            <Menu.Item
                                name='experiencia'
                                onClick={() => {onItemClick('experience')}}
                                active={activeItem === 'experience'}
                            />
                        </Menu>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

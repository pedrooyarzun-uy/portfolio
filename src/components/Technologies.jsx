import React from 'react'
import {Grid, Table, Header, List} from 'semantic-ui-react'
import {FaReact, FaNodeJs, FaJava, FaDocker, FaGit, FaPhp, FaJs} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

export const Technologies = () => {
    return (
        <div id='technologies'>
            <Grid columns='equal' style={{marginLeft: '2rem', marginRight: '2rem'}}>
                <Grid.Row>
                    <Grid.Column width={16} textAlign='center' verticalAlign='middle'>
                        <Header as='h2'>
                            Tecnologias 
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center' verticalAlign='middle' >
                        <Table color='teal'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center' rowSpan='2' colSpan='2'>
                                        Backend
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <List bulleted>
                                            <List.Item>
                                                Node Js<FaNodeJs/>
                                            </List.Item>
                                            <List.Item>
                                                Java <FaJava/>
                                            </List.Item>
                                            <List.Item>
                                                Php <FaPhp/>
                                            </List.Item>
                                        </List>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled color='teal'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>
                                        Frontend
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Cell>
                                    <List bulleted>
                                        <List.Item>
                                            React.js <FaReact/>
                                        </List.Item>
                                        <List.Item>
                                            JavaScript <FaJs/>
                                        </List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled color='teal'>
                            <Table.Header>
                                <Table.HeaderCell textAlign='center'>
                                    Otros
                                </Table.HeaderCell>
                            </Table.Header>
                            <Table.Body>
                                <Table.Cell>
                                    <List bulleted>
                                        <List.Item>
                                            Docker <FaDocker/>
                                        </List.Item>
                                        <List.Item>
                                            MySQL <SiMysql/>
                                        </List.Item>
                                        <List.Item>
                                            Git <FaGit/>
                                        </List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>        
    )
}

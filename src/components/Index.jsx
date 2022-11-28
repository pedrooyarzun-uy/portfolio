import React from 'react'
import {Container} from 'semantic-ui-react'
import { AboutMe } from './AboutMe'
import { Education } from './Education'
import { Experience } from './Experience'
import { NavBar } from './NavBar'
import { Portfolio } from './Portfolio'

import { Card } from './Card'
import { Technologies } from './Technologies'

export const Index = () => {

    return (
        <>
            <NavBar/>
            <AboutMe/>
            <Education/>
            <Experience/>
            <Portfolio/>
            <Technologies/>   
        </> 
    )
}

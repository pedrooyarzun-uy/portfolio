import React from 'react'
import {Card as SemanticCard, Image as SemanticImage} from 'semantic-ui-react'

export const Card = ({title, description, image, date, link}) => {
    
    return (
        <SemanticCard
            href={link}
            color='black'
        >
            <SemanticImage src={image} wrapped ui={false}/>
            <SemanticCard.Content>
                <SemanticCard.Header>
                    {title}
                </SemanticCard.Header>
                <SemanticCard.Meta>
                    {date}
                </SemanticCard.Meta>
                <SemanticCard.Description>
                    {description}
                </SemanticCard.Description>
            </SemanticCard.Content>
        </SemanticCard>
    )
}

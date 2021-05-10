import React from 'react'
import { Card } from 'react-bootstrap'

export default class CardsPage extends React.Component {
 
    
 
    render() {
        let showArr=[]
        for (let i = 0; i < this.props.selectedMoviesArr.length; i++) {
            const element = this.props.selectedMoviesArr[i];

                showArr.push(
                    <Card >
  <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w200${element.poster_path}`} />
  <Card.Body>
    <Card.Title>{element.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>   
                )}
                console.log(showArr)

            return showArr
            
            
            }}

import React from 'react'
import { CardDeck, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import CardsPage from './CardsPage';


export default class MoviesPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            searchInput:"",
            movieNames:"",
            selectedMovie:"",


        }
        

    }
    
changeText=(event)=>{
    const text=event.target.value;
    this.setState({searchInput:text})
    
}



componentDidUpdate(prevProps, prevState) {
    if( 
    (this.state.searchInput!==prevState.searchInput) ){
  
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed7a761ae5a1fd2e2d5353193448abf8&query=${this.state.searchInput}`)
    .then(response => response.json())
    .then(data => this.setState({movieNames:data.results}))
}}
 
selectedMoviesArr=[]

addMovie=(event)=>{

   
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed7a761ae5a1fd2e2d5353193448abf8&query=${event.target.innerText}`)
    .then(response => response.json())
    .then(data =>this.selectedMoviesArr=[...this.selectedMoviesArr, data.results[0],data.results[0]])
    .then(this.setState({selectedMovie:this.selectedMoviesArr}))


}

    render() {
       let  newArr=[]
       
       if(this.state.searchInput.length>0 && this.state.movieNames) {
        for (let i = 0; i < this.state.movieNames.length; i++) {
            const element = this.state.movieNames[i].title;
            newArr.push(<ListGroup.Item  onClick={this.addMovie} action>{element}</ListGroup.Item>)            
           // newArr.push(  <ListGroup.Item action>{movieNames}</ListGroup.Item> )
            
        }}


        

        

        return (
            <div>
                <Form.Control onChange={this.changeText} type="text" placeholder=" input here..."  />
                <ListGroup>
                    {newArr}
</ListGroup>
<CardDeck><CardsPage selectedMoviesArr={this.state.selectedMovie} ></CardsPage> </CardDeck>

    </div>
        )
    }
}



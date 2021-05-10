import React, { Component } from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap'
import List from './List'

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            input:'input here',
            list:[]
        }

    }


changeInput=(event)=>{
    this.setState({input:event.target.value})
}
     listArr=[]
    addToList=()=>{
        console.log(this.state.input)
        this.listArr.push(this.state.input)
        this.setState({list:this.listArr})
        this.setState({input:""})
}

    

    render() {
        return (
            <div>
                <Form>
 

  <Form.Group controlId="text">
    <Form.Label>add to dos here</Form.Label>
    <Form.Control type="text" placeholder={this.state.input} value={this.state.input} onChange={this.changeInput} />
    <Button onClick={this.addToList} variant="primary" type="button">
    add to list
  </Button>
    </Form.Group>

  
</Form>
<ListGroup>
<List list={this.state.list}></List>
</ListGroup>
            </div>
        )
    }
}

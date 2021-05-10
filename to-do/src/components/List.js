import React, { Component } from 'react'
import {  ListGroup } from 'react-bootstrap'


export default class List extends Component {


    render() {
        let newArr=[]

        for (let i = 0; i < this.props.list.length; i++) {
            const element = this.props.list[i];
            newArr.push( 
            <ListGroup.Item>{element}</ListGroup.Item>
                )

            
        }
        return (
                    newArr
        )
    }
}

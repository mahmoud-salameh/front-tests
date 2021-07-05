import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'

export class Item extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
          <Card.Body>
            <Card.Title>
              {this.props.title}
            </Card.Title>
            <Card.Text>
              {this.props.overview}
            </Card.Text>
            <Button variant="primary" onClick={() => this.props.addToFav(this.props.index)}>add to favorit</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Item

import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/'



export class FavItem extends Component {
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
            <Button variant="primary" onClick={() => this.props.Delete(this.props.index)}>DELETE FROM favorit</Button>
            <Button variant="primary" onClick={() => this.props.ShowUpdate(this.props.index)}>UPDATE FROM favorit</Button>
          </Card.Body>
        </Card>
            </div>
        )
    }
}

export default FavItem

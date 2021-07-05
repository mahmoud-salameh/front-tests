import React, { Component } from 'react'
import axios from 'axios'
import FavItem from './FavItem';
import { Modal, Button, Form } from 'react-bootstrap/';



export class Fav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            showForm: false,
            index: 0,
            title: '',
            overview: '',
            poster_path: '',

        }

    }


    componentDidMount() {
        const server = 'http://localhost:8080/getFav';
        axios.get(server).then(data => {
            this.setState({
                favData: data.data
            })
            // console.log(data.data)
        }).catch(error => {
            console.log(error)
        })
    }


    delete = (index) => {
        const server = 'http://localhost:8080/deleteFav';
        const object = { id: this.state.favData[index]._id }
        axios.delete(`${server}`, { params: object }).then(response => {
            console.log(this.state.favData[index]);
            this.setState({
                favData: response.data
            })
        }).catch()


    }


    ShowUpdate = (index) => {
        this.setState({
            showForm: true, index: index,
            title: this.state.favData[index].title,
            overview: this.state.favData[index].overview,
            poster_path: this.state.favData[index].poster_path,

        })
    }

    handleClose = () => {
        this.setState({ showForm: false })
    }

    updateForm = (e) => {

        e.preventDefault()
        const newObj = {
            title: e.target.title.value,
            overview: e.target.overview.value,
            poster_path: e.target.poster_path.value,
            id:this.state.favData[this.state.index]._id,
        }
        // console.log(newObj);
        const server = 'http://localhost:8080/updateForm';
        axios.put(server , newObj).then(response => {

this.setState({
    favData: response.data
})


        }).catch()

        this.setState ({showForm:false})
    }

    render() {
        return (
            <div>
                {this.state.favData.length > 0 &&

                    this.state.favData.map((data, index) => {
                        return (



                            <FavItem

                                title={data.title}
                                overview={data.overview}
                                poster_path={data.poster_path}
                                index={index}
                                Delete={this.delete}
                                ShowUpdate={this.ShowUpdate}
                            />
                        )

                    })

                }


                <Modal show={this.state.showForm} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.updateForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control name='title' defaultValue={this.state.title} type="text" placeholder="title" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Overview</Form.Label>
                                <Form.Control name='overview' defaultValue={this.state.overview} type="text" placeholder="title" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Poster_path</Form.Label>
                                <Form.Control name='poster_path' defaultValue={this.state.poster_path} type="text" placeholder="title" />

                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Fav

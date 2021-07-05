import axios from 'axios'
import React, { Component } from 'react'
import Item from './Item';

export class Home extends Component {

constructor(props){
    super(props);
    this.state = {moviesData:[]}
}

componentDidMount() {
    const server = 'http://localhost:8080/getData';
    axios.get(server).then(data => {
this.setState({
    moviesData: data.data
})
console.log(data.data)
    }).catch(error=> {
console.log(error)        
    })
}

addToFav = (index) => {

    const item = {title: this.state.moviesData[index].title, 
        overview: this.state.moviesData[index].overview,
        poster_path: `https://image.tmdb.org/t/p/w500${this.state.moviesData[index].poster_path}`


    }
// console.log(item)

const server = 'http://localhost:8080/addData';
axios.post(server,item)
}







    render() {
        return (
            <div>
                {this.state.moviesData.length > 0 &&
                this.state.moviesData.map   ((movie, index) =>{
                    return(
                        <Item
                        title = {movie.title}
                        overview = {movie.overview}
                        poster_path = {movie.poster_path}
                        index = {index}
                        addToFav = {this.addToFav}
                        />
                    )
                })
                }
            </div>
        )
    }
}

export default Home

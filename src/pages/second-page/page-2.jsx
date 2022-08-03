import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'


const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  }

const userStyles = {
    color: "#00008B",
    fontFamily: "Courier New, Courier, monospace",
}

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
    
`;

class SecondPage extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            posts: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/user')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })

        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then((json) => {
            this.setState({
                posts: json,
                DataisLoaded: true
            });
        })

    }



    render() {
        const { DataisLoaded, items, posts } = this.state;
        if (!DataisLoaded) return 
            <div>
                <h1> Pleses wait some time.... </h1> 
            </div> ;

    return (
    <main style={pageStyles}>
        
        <div>
            <h1> This is my list extracted from my API </h1>
        
            <h2> Users List </h2>
            {items.map((item) => (
                <p style={userStyles}>
                    <li style={{width: "100%", height:"40px"}}>
                      Person {item.id} : {item.first_name} {item.last_name} <br/>
                      His/Her Job : {item.title}
                    </li>
                </p>
            ))}

            <h2> Those are the posts</h2>
            {posts.map((post) => (
                <p style={userStyles}>
                    <li style={{width: "100%", height:"30px"}}>
                      Job {post.id} : {post.title}
                    </li>
                </p>
            ))}

           
        </div>
        
        <div style = {{width: "100%", height: "50px"}}></div>
        
        <Link to="/">
            <Button>
               Return to the main menu
            </Button>
        </Link>
    </main>
    )
}
}

export default SecondPage
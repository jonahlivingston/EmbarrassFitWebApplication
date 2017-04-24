import React,{Component} from 'react'
import Navbar from './Navbar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class HomePage extends Component {

  render() {
    return (
    <div>
    <Navbar/>
    <h1 className="text-center">BlushFit</h1>
    <h2 className="text-center">For When Fear of Decreased Life Expectancy and Quality of Life are Not Enough </h2>
    <button id="JoinButton">Get Fit or Embarass Yourself Now</button>
      <img id="coverImage" src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_1280.jpg" />
    </div>
    )
  }
}


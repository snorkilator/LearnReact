import './App.css';
import React, { react } from 'react'

function App() {


  return (
    <div className="App">
      {/* {HelloSarah} */}
      {/* <p>It's {new Date().toLocaleTimeString()}</p> */}
      {/* <Hello name="Jordan" /> */}
      {/* <Hello name="Kim" /> */}
      <FaceBookPost />
      <Clock />
    </div>
  );
}
const HelloSarah = <Hello name="Sarah" /> //jsx element
function Hello(props) {
  return (<p >Hello {props.name}</p>)
}

// @params Author: {Name, time active}, text: string, Likes: number
class FaceBookPost extends React.Component {
  constructor(props) {
    super(props)
    this.authorinfo = { name: "Joe Shmoe", timeActive: 4 }
    this.state = { likes: 0 }
    this.setState = this.setState.bind(this)
    this.textBody = "I love the outdoors. And the screen doors"
  }

  render() {
    return (
      <div className='Post'>
        <AuthorInfo authorinfo={this.authorinfo} />
        <TextBody text={this.textBody} />
        <Likes likes={this.state.likes} setState={this.setState} />
      </div>
    )
  }
}

// @params {Name, time active}
function AuthorInfo(props) {
  return (<div><h4>{props.authorinfo.name}</h4> <h6> time active: {props.authorinfo.timeActive}</h6></div>)
}
//params string
function TextBody(props) {
  return (<p>{props.text}</p>)
}
//params number
function Likes(props) {
  return (<div className="Likes"><h6>You have {props.likes} likes</h6> <Incrementer setState={props.setState}/></div>)
}

class Clock extends React.Component {
  Timer
  state
  constructor(props) {
    super(props)
    this.state = { clock: new Date() }
  }
  componentDidMount() {
    this.Timer = setInterval(() => { this.setState({ clock: new Date() }) }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.Timer)
    alert("component unmounted!")
  }

  render() {
    return <p>{this.state.clock.toLocaleTimeString()}</p>
  }
}

let Butt = (props) => {
  return (<button onClick={() => props.setState((state) => { return ({ likes: state.likes + props.increment }) })}>{props.increment} </button>
  )
}

class Incrementer extends React.Component {
  constructor(props) {
    super(props)
    this.setInc = props.setState
  }
  render() {
    return (

      <div className="button buhnanaza">
        {/* <h1>{this.props.likes}</h1> */}
        <Butt setState={this.setInc} increment={1} />
        <Butt setState={this.setInc} increment={-5} />
      </div>
    )
  }
}



export default App;
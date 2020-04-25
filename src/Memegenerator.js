import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles1 = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default class Memegenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      toptext: "",
      bottomText: "",
      randomImg: "",
      isLoading: true,
      allMemes: [],
    };
    this.handleEvent=this.handleEvent.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount() {
    this.getMemes();
    // this.handleClick();
    
    
  }
  getMemes() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({
          isLoading: false,
          allMemes: memes,
        });
      });
  }
  handleClick(event){
    event.preventDefault()
    const randomnum=Math.floor(Math.random() *this.state.allMemes.length)
    const randomimage = this.state.allMemes[randomnum].url;
    this.setState({
        randomImg:randomimage
    })
    
  }
  handleEvent(event){
    const{name,value}=event.target;
    this.setState({
        [name]:value
    })
  }
  render() {
    const loaded = this.state.isLoading;
    // const classes = this.useStyles1();
    if (loaded) {
      return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
    } else {
      return (
        <div className="form-style-5">
          <form onSubmit={this.handleClick}>
            <fieldset>
              <input
                type="text"
                name="toptext"
                value={this.state.toptext}
                onChange={this.handleEvent}
                placeholder="Top Text"
              ></input>
              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                onChange={this.handleEvent}
                placeholder="Bottom Text"
              ></input>
              <button >Generate.. </button>
            </fieldset>
            <div>
            <Card className={useStyles1.root}>
            <CardContent className="meme">
                <img src={this.state.randomImg} alt=""/>
                <p className="top">{this.state.toptext}</p>
                <p className="bottom">{this.state.bottomText}</p>
            </CardContent>
            </Card>
            </div>
          </form>
        </div>
      );
    }
  }
}

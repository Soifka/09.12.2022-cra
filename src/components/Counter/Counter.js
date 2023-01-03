import React, {  useState, useEffect } from "react";
import { addSeconds, format } from 'date-fns';


const Counter = (props) => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
  const [isRunning, setRunning] = useState(true);

  let intervalId = null;

  useEffect(() => {
    if(isRunning) {
      intervalId = setInterval(() => {
        setTime(time => addSeconds(time, 1));
      }, 1000);
    }
    
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const switchRunning = () => {
    setRunning(!isRunning);
  }
  
  return (
    <>
      <h1>
        {format(time, 'HH:mm:ss')}
      </h1>
      <button onClick={switchRunning}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </>
  );
}

export default Counter;

/*
class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
    };

    this.intervalId = null;
  }

  start = () => {
    this.intervalId = setInterval(() => {
      const { count } = this.state;

      this.setState({
        count: count+1
      });
    }, 1000);
  }

  componentDidMount() {
    this.start();
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('I died');
  }

  render() {
    console.log("render");
    return (
      <>
        <h1 onClick={() => {this.setState({ count: 1 })}}>
          {this.state.count}
        </h1>
        <button>start</button>
      </>
    );
  }
}

export default Counter;
*/ 

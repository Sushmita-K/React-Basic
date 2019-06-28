import React from 'react';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {number: '',orent:''};

  //   this.handleChange = this.handleChange.bind(this);

  // }
  state = {
    number: 0,
    orent: 0,
    range:0,
    days:0
    
  }
  handleChange = event => {
    // console.log(event.target.value);
    this.setState({ [event.target.name]: Number(event.target.value) });
    // this.setState({number:event.target.value });
    // this.setState({orent:event.target.value });
  

    // this.setState({orent: event.target.value});t
   
  }


  render() {
    console.log(this.state)
    let result = 0;
    let value;
    value=this.state.range;
    if((this.state.number!=0) && (this.state.orent!=0))
    {
      result  = ((this.state.number + this.state.orent) * (100 + this.state.range)) / 100;
      if(this.state.days!=0){
        result = (result * this.state.days)/22;
      }
    }
   
    
    return (
      <div className="Form1">
        <label className='labeltext'>
          Salary:
    <input type="text" name="number" className='text1' value={this.state.number} onChange={this.handleChange} />
        </label>
        <label className='labeltext'>
          Overrent:
    <input type="text" name="orent" className='text2' value={this.state.orent} onChange={this.handleChange} />
        </label>
        <label className='labeltext'>Profit:
  <span>0</span><input type="range" name="range" className='text3' value={this.state.range} onChange={this.handleChange} min="0" max="100" />100
  Range: {value} </label>
        <label className='labeltext'>Days:
   <input type="text" name="days" className='text4' value={this.state.days} onChange={this.handleChange} />
        </label>

         <span className="output"> Result:</span>  <output className='text5' > {result}</output>

      </div>
    );
  }
}


export default App;

import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
            binario: "",
            decimal: 0 
        };      
        
        this.handleChange = this.handleChange.bind(this);
        this.converter = this.converter.bind(this);
    }

    handleChange(event) {
        this.setState({ binario: event.target.value });
    }

    converter(){
        
        let decimal = parseInt(this.state.binario, 2);
        this.setState({ decimal });
    }
   

    render () {
        return (
            <div className="container">
                <h1 className="text-center pt-3">Binary to Decimal</h1>
                                        
                <div className=" row mt-3 p-2 mx-5">                 
                    <input type="text"                          
                           placeholder="Type binary number" 
                           className=" form-control mb-2"                            
                           onChange={ this.handleChange }>                           
                    </input>
                                      
                    <button  type="submit" onClick={this.converter} className="btn btn-primary mb-2  ">Convert</button>        
                    <h2 className="ml-4"> Result: {this.state.decimal} </h2> 
                   
                </div>     
               
                
            </div>    
        )
    }
}



export default Form;
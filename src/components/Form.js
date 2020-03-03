import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = { 
            binario: "",
            decimal: 0,                     
        };      
        
        this.handleChange = this.handleChange.bind(this);
        this.converter = this.converter.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    handleChange(event) {
        let binario = event.target.value;
        this.setState({ binario: binario });       
    }

    converter(){
       
        let decimal = this.state.binario;
        
        decimal = parseInt(this.state.binario, 2);
        this.setState({ decimal });
        
        
        console.log(this.state.binario);
    }

   refresh(){       
        this.setState({ decimal: 0, binario: '' });        
    }

    render () {
        const bin = this.state.binario;

        return (            
            <div className="container">
                <h1 className="text-center pt-3">Binary to Decimal</h1>
                                        
                <div className=" row p-2 mx-5">                 
                    <input type="text"    
                                           
                           placeholder="Type binary number" 
                           className=" form-control mb-2" 
                           onChange={ this.handleChange }
                           value={this.state.binario}>                           
                    </input>
                                      
                    <button  type="submit" onClick={this.converter} className="col btn btn-primary mb-2  ">Convert</button>       
                    <button  type="submit" onClick={this.refresh} className= "col btn btn-success mb-2 ml-2 ">Reset</button>
                   
                </div>     
                <div className=" d-flex flex-nowrap text-center">  
                        
                        <h5 className="flex-fill my-2"> {bin.length < 8 ?  'Result: ' + this.state.decimal : <div className="error"><strong>Ops!</strong> Só convertemos até 8 digitos</div>}</h5>
                </div>
                
            </div>    
        )
    }
}



export default Form;
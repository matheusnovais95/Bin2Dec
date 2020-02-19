import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends Component {

    testeclick () {
        alert('Clicado!')
    }

    render () {
        return (
            <div className="container">
                <h1 className="text-center pt-3">Binary to Decimal</h1>
            
                <form className="form-inline">              
                <div className="form-group mx-sm-5 row mt-4 pt-2">                 
                    <input  className="form-control mb-2 mr-sm-2"  placeholder="Only 0's and 1's"></input>    
                    <input  className="form-control mb-2 mr-sm-2"  placeholder="Result"></input>    
                    <button onClick={this.testeclick} type="submit" className="btn btn-primary mb-2 mr-md-2 ">Convert</button>       
                </div>
                
                </form>
            </div>    
        )
    }
}



export default Form;
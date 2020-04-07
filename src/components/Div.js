import React , {Component} from 'react';
import '../CSS/example.css';
import Example from './Example';
import Task from './Task';
import Button from '@material-ui/core/Button';
import Data from './Data';
import Tdata from './Tdata';

class Div extends Component {
    render(){
        return (
            <div class="acko">
                <br></br>
                <br></br>
                <Example></Example>
                <br></br>
                <br></br><br></br>
                <div class="grid-container">
                    <div class="item1"><h3>Studies <Button variant="contained" color="primary" disableElevation 
                    >
                    Create New Study
                    </Button></h3>&nbsp;<Data></Data></div>
                    <div class="item2"><h3>Task</h3>&nbsp;<Tdata></Tdata></div>
                </div>
                
            </div>
        )
    }
}
export default Div;
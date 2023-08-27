import React from "react";


class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Value: 0,
        }
    }
    
    static defaultProps = {

        Name: "Задача",
    }
    render(){
        return(
            <div>
                {this.props.Name}
                <h1>{this.state.Value}</h1>
                <input type="checkbox" onChange={event =>{ 
                    if(document.getElementsByTagName('input').checked){
                        document.getElementsByTagName('input').checked=0;
                        this.setState({Value: this.state.Value - 1})
                        alert("Задача не выполнена");
                    }else{
                        document.getElementsByTagName('input').checked=1;
                        this.setState({Value: this.state.Value + 1})
                        alert("Задача выполнена");
                    }
                   
                }}/>

            </div>
        )
    }
}

export default Item;

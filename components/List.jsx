import React from "react";
import Item from "./Item";

class List extends React.Component{

    render(){
        
        return(
            <div>
              <ul>
                <li><Item Name="Проснуться в 9:00"/></li>
                <li><Item Name="Погулять с собакой 9:30"/></li>
                <li><Item Name="Приготовить завтрак"/></li>
                
                </ul>  
            </div>
        )
    }
}

export default List
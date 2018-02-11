import React from "react";
import ReactDOM from "react-dom";

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="text">
                hello world!
            </div>
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));
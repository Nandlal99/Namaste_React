import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1,
        }
        console.log("child constructor");
    };

    componentDidMount(){
        console.log("child DidMount");
        // this.timer = setInterval(() => {
        //     console.log("Namaste React");
        // },1000);
    };

    componentDidUpdate(){
        console.log(" child component didupdated");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("child WillUnmount");
    }

    render(){
        console.log("child render");
        return (
            <div>
                <h3>Profile Class  Component</h3>
                <h3>Name : {this.props.name}</h3>
                <button onClick={() => {
                    this.setState({count:1});
                }}><h4> Count : {this.state.count}</h4></button>
            </div>
        );
    }
}

/*
* Parent constructor
* Parent render
* child constructor
* child render
* 
* Parent DidMount
* (API call) this.setState
* child DidMount
* child render
* child Didupdate
* child WillUnmount
*/

export default Profile;
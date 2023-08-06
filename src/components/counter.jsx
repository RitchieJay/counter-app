import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value: this.props.value,
        tags: ['tag1','tag2','tag3']
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul> {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    }

    render() { 
        console.log(this.props.id);

        return (
        <div>
            {this.state.tags.length === 0 && "Please create new tags!"}
            <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
            <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.id) } 
            className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatvalue(){
        const {value} = this.state;
        return value === 0 ? "Zero": value;
    }
}
 
export default Counter;

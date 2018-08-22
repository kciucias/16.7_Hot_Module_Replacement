import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	text: ""
        };
    }

    onChangeHandle(event) {
        this.setState({
            text: event.target.value
        });
    }
// add()???
    onSubmit(event) {
        event.preventDefault()
        props.add(text);
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <input 
                	type="text" 
                	placeholder = "Add new task"
                	value={this.state.text}  
                	onChange={event => this.onChangeHandle(event)}
                	 />
                <input 
                	type= "submit"
                	placeholder = "Add"
                    />
            </form>
        );
    }
}

export default TodoForm;







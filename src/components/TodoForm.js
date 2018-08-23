import React from 'react';

//smart komponent
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

    onSubmit(event) {
        event.preventDefault()
        this.props.add(this.state.text);
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

/* komponent reprezantycyjny

import React from 'react';

const TodoForm = props => (
    <form onSubmit={event => {
        event.preventDefault();
        props.add(event.target.querySelector('input[type="text"]').value)
    }}>
        <input 
            type="text" 
            placeholder="Add new task" 
        />
        <input 
            type="submit"
            placeholder="Add"
        />
    </form>
);

export default TodoForm;

/*







import React from 'react';
import style from './style.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInput(e) {
        // Гибкая высота поля ввода
        e.target.style.height = '1.3em';
        e.target.style.height = e.target.scrollHeight + 'px';

        this.props.handleItemInput(this.props.id, e.target.value);
    }

    handleDelete() {
        this.props.handleItemDelete(this.props.id);
    }

    handleBlur(e) {
        if (!e.target.value) {
            this.handleDelete();
        }
    }

    render() {
        return (
            <li className="list-group-item px-0 py-0 item">
                <div className="me-3 pt-2 align-self-start item__left ">
                    <input 
                        className="form-check-input item__input" 
                        type="radio" 
                        onClick={this.handleDelete}
                    />
                </div>
                <div className="py-2 item__right">
                    <textarea 
                        className="form-control py-0 w-100 item__input item__input--text" 
                        id={this.props.id}
                        value={this.props.value} 
                        placeholder={this.props.placeholder} 
                        onInput={this.handleInput} 
                        onBlur={this.handleBlur}
                        autoFocus 
                    ></textarea>
                </div>
            </li>
        );
    }
}

export {
    Item, 
}
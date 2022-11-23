import React from 'react';
import style from './style.css';

class Item extends React.Component {
    _deleteHandle(e) {
        this.props.deleteItemsHandle(this.props.id);
    }

    // Гибкая высота поля ввода
    _inputHandle(e) {
        e.target.style.height = '1.3em';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    _blurHandle(e) {
        if (!e.target.value) {
            this._deleteHandle();
        }
    }

    render() {
        return (
            <li className="list-group-item px-0 py-0 item">
                <div className="me-3 pt-2 align-self-start item__left ">
                    <input className="form-check-input item__input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={this._deleteHandle.bind(this)} />
                </div>
                <div className="py-2 item__right">
                    <textarea className="form-control py-0 w-100 item__input item__input--text" autoFocus aria-label="With textarea" placeholder={this.props.text} onInput={this._inputHandle.bind(this)} onBlur={this._blurHandle.bind(this)}></textarea>
                </div>
            </li>
        );
    }
}

export {
    Item, 
}
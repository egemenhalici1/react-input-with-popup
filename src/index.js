import React from 'react';
import './input-with-popup.css';

export class InputWithPopup extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        const { onChange, children, disabled } = this.props;
        const { popoverOpen } = this.state;
        return (
            <div className="input-popup">
                <input onChange={onChange ? e => onChange(e) : () => { }} disabled={disabled} />
                <button onClick={() => this.toggle()}>
                    {this.props.buttonLabel}
                </button>
                <div placement="bottom" className={popoverOpen ? "show popuptext" : "popuptext"}>
                    {children}
                </div>
            </div>
        );
    }
};
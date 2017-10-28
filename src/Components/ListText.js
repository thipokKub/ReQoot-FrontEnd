import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'default': Array.from(Array(props.minNum).keys()).map(() => ''),
            'value': Array.from(Array(props.minNum).keys()).map(() => '')
        }
        this.onRemove = this.onRemove.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUmount() {
        this._isMounted = false;
    }

    onAdd() {
        if(this._isMounted) {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    'default': prevState.default.concat(['']),
                    'value': prevState.value.concat([''])
                });
            })
        }
    }

    onRemove(ind) {
        if (this._isMounted) {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    'default': prevState.default.slice(1),
                    'value': prevState.value.slice(0, ind).concat(prevState.value.slice(ind + 1))
                });
            })
        }
    }

    onChangeValue(ind, value) {
        if (this._isMounted) {
            this.setState((prevState) => {
                let new_value = [...prevState.value];
                new_value[ind] = value;
                return ({
                    ...prevState,
                    'value': new_value
                });
            }, () => this.props.onChangeVal(this.state.value))
        }
    }

    render() {
        return (
            <div>
                {   
                    this.state.value.map((item, key) => {
                        return (
                            <div style={{'display': 'flex', 'margin': '10px 0px'}} key={key}>
                                <div style={{ 'flex': '1' }}>
                                    <input type="text" className="w3-input" value={item} onChange={(e) => this.onChangeValue(key, e.target.value)} placeholder={this.props.placeholder} />
                                </div>
                                <div
                                    className={`w3-container w3-card-2 w3-hover-shadow w3-red active-shadow-none ${!(this.state.value.length === 1 && key === 0) ? '' : 'button-disable'}`}
                                    style={{'width': '100px', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}
                                    onClick={() => {
                                        if(!(this.state.value.length === 1 && key === 0)) this.onRemove(key)
                                    }}
                                >
                                    Remove
                                </div>
                            </div>
                        );
                    })
                }
                <div
                    className="w3-container w3-card-2 w3-hover-shadow w3-green active-shadow-none"
                    style={{ 'width': '100px', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'padding': '8px'}}
                    onClick={this.onAdd}
                >
                    Add
                </div>
            </div>
        );
    }
}

ListText.PropTypes = {
    'onChangeVal': PropTypes.func.isRequired
}

export default ListText;
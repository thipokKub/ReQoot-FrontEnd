import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class CPBContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'percent': 0
        }
        setTimeout(() => {
            if (this._isMounted) {
                this.setState((prevState, props) => {
                    return ({
                        ...prevState,
                        'percent': props.percent
                    });
                })
            }
        }, 0);
    }

    componentWillReceiveProps(nextprops) {
        if (this._isMounted) {
            this.setState((prevState, props) => {
                return ({
                    ...prevState,
                    'percent': nextprops.percent || 0
                })
            })
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (<CircularProgressbar percentage={this.state.percent} />);
    }
}

export default CPBContainer;
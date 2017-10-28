import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivImg = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-position: top center;
    height: 100%;
    width: 100%;
`;

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUmount() {
        this._isMounted = false;
    }

    onError() {
        if(this._isMonted) {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    isError: true
                });
            })
        }
    }

    render() {
        if(this.state.isError) {
            return (<div className={this.props.divClass} />);
        } else if(this.props.isUseBg) {
            if(this.props.isPadding) {
                return (
                    <div className={this.props.divClass} style={{'padding': '20px'}}>
                        <DivImg image={this.props.src} />
                    </div>
                );
            }
            return <DivImg image={this.props.src} className={this.props.divClass} />
        }
        return (<img alt={this.props.alt} src={this.props.src} onError={this.onError} className={this.props.imgClass} />);
    }
}

Image.defaultProps = {
    alt: ''
}

Image.PropTypes = {
    divClass: PropTypes.string,
    imgClass: PropTypes.string,
    isUseBg: PropTypes.bool,
    alt: PropTypes.string,
    src: PropTypes.strinf
}

export default Image;
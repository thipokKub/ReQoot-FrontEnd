import React, { Component } from 'react';
import styled from 'styled-components';
import Item from '../Components/Item';
import { Modal, Button } from 'react-bootstrap';
import Image from '../Components/Image';
import { fadeInterval } from '../constrain';

const ResultPageStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;

    .none {
        display: none;
    }

    .modal {
        z-index: 15;
    }

    .top-right {
        position: absolute;
        top: -60px;
        right: -10px;
        padding: 10px 20px;
    }

    .not-vis {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
    }

    .vis {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.2s;
    }

    h2 {
        width: 100%;
        color: #FFF;
    }
`;

const amountOfDummy = 3;

//State: 'NA' or 'Accept' or 'Reject'

class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'fadeIntervalId': null,
            'fadeVal': Array.from(Array(this.props.store.result.length).keys()).map(() => false),
            'activeIndex': -1,
            'info': this.props.store.result
        }

        this.onClickIndex = this.onClickIndex.bind(this);
        this.onResetIndex = this.onResetIndex.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        let new_state = { ...this.state };
        let _this = this;
        new_state.fadeIntervalId = setInterval(() => {
            if(_this._isMounted) {
                _this.setState((prevState) => {
                    let new_fadeVal = [...prevState.fadeVal];
                    if(new_fadeVal.indexOf(false) !== -1) {
                        new_fadeVal[new_fadeVal.indexOf(false)] = true;
                        return ({
                            ...prevState,
                            'fadeVal': new_fadeVal
                        });
                    } else {
                        clearInterval(prevState.fadeIntervalId);
                        return ({
                            ...prevState,
                            'fadeIntervalId': null
                        });
                    }
                })
            }
        }, fadeInterval);

        this.setState((prevState) => {
            return (new_state);
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentWillMount() {
        this.props.setBgColor('#62B4FA');
    }

    onClickIndex(ind) {
        if(this._isMounted) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    'activeIndex': ind
                }
            })
        }
    }

    onClickAccept(ind) {
        if (this._isMounted) {
            this.setState((prevState) => {
                let new_info = [ ...prevState.info ];
                new_info[ind].State = 'Accept';
                return {
                    ...prevState,
                    'info': new_info
                }
            })
        }
        //Do axios
    }

    onClickReject(ind) {
        if (this._isMounted) {
            this.setState((prevState) => {
                let new_info = [...prevState.info];
                new_info[ind].State = 'Reject';
                return {
                    ...prevState,
                    'info': new_info
                }
            })
        }
        //Do axios
    }

    onResetIndex() {
        if (this._isMounted) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    'activeIndex': -1
                }
            })
        }
    }

    render() {
        const currentItem = (this.state.activeIndex >= 0) ? this.state.info[this.state.activeIndex] : {};
        // const RecalBtn = (
        //     <div className="w3-card-2 w3-hover-shadow w3-container w3-green top-right active-shadow-none">
        //         Re-Calaculate
        //     </div>
        // );

        return (
            <ResultPageStyle>
                <h2>Top 3 Developers</h2>
                {
                    (this.state.info.map((item, key) => {
                        return (
                            <Item
                                key={key}
                                onActive={() => this.onClickIndex(key)}
                                onExit={this.onResetIndex}
                                isActive={this.state.activeIndex === key}
                                info={item}
                                onAccept={() => this.onClickAccept(key)}
                                onReject={() => this.onClickReject(key)}
                                className={this.state.fadeVal[key] ? 'vis' : 'not-vis'}
                            />);
                    }))
                }
                {
                    (this.state.info.length === 0 && <Item isEmpty={true} />)
                }
                {
                    (Array.from(Array(amountOfDummy).keys()).map((item) => {
                        return (<Item key={item} isDummy={true} />);
                    }))
                }
                {
                    (this.state.activeIndex >= 0) && (
                        <Modal show={this.state.activeIndex !== -1} onHide={this.onResetIndex}>
                            <Modal.Header closeButton>
                                <div className="w3-container w3-blue">
                                    <h1>Personal Info</h1>
                                </div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="Modal-Body">
                                    <div className="Top">
                                        <Image src={currentItem.Avatar} isPadding={true} isUseBg={true} divClass="profile-modal" />
                                        <div>
                                            <span>{currentItem.Name}</span>
                                        </div>
                                    </div>
                                    <div className="Bottom">
                                        <div>
                                            {currentItem.Description}
                                        </div>
                                        <hr />
                                        <ul>
                                            {currentItem.Skills.map((skill, key) => {
                                                return (<li key={key}>{skill}</li>);
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.onResetIndex}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    )
                }
            </ResultPageStyle>
        );
    }
}

export default ResultPage;
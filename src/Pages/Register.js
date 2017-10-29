import React, { Component } from 'react';

import Axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { JobList, PostJobURI } from '../constrain';
import ListText from '../Components/ListText';
import _ from 'lodash';
import avatar1 from '../Images/Avatar/1.svg';
import avatar10 from '../Images/Avatar/10.svg';
import avatar11 from '../Images/Avatar/11.svg';
import avatar12 from '../Images/Avatar/12.svg';
import avatar13 from '../Images/Avatar/13.svg';
import avatar14 from '../Images/Avatar/14.svg';
import avatar15 from '../Images/Avatar/15.svg';
import avatar16 from '../Images/Avatar/16.svg';
import avatar2 from '../Images/Avatar/2.svg';
import avatar3 from '../Images/Avatar/3.svg';
import avatar4 from '../Images/Avatar/4.svg';
import avatar5 from '../Images/Avatar/5.svg';
import avatar6 from '../Images/Avatar/6.svg';
import avatar7 from '../Images/Avatar/7.svg';
import avatar8 from '../Images/Avatar/8.svg';
import avatar9 from '../Images/Avatar/9.svg';
import styled from 'styled-components';

const Avatar = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16];


const sideButtonSize = 50;

const RegisterStyle = styled.div`
    padding-top: 20px;
    top: -30px;
    position: relative;
    width: 100%;
    height: 100%;

    ol.carousel-indicators {
        position: absolute;
        bottom: 0;
        margin: 0;
        left: 0;
        right: 0;
        width: auto;
    }

    ol.carousel-indicators li,
    ol.carousel-indicators li.active {
        float: left;
        width: calc(100%/${props => props.len});
        height: 10px;
        margin: 0;
        border-radius: 0;
        border: 0;
        transition: all 0.2s;
        background: transparent;
    }

    ol.carousel-indicators li.active {
        background: #1356FF;
    }

    .carousel-control {
        background-color: #4163F0;
        background-image: none;
        color: #FFF;
        width: ${sideButtonSize}px;
        // display: none;

        &.left {
            left: ${-1*sideButtonSize}px;
            height: 100%;
        }

        &.right {
            right: ${-1 * sideButtonSize}px;
            height: 100%;
        }
    }

    .slide-item {
        // width: calc(100vw - 300px - ${2 * sideButtonSize}px  - 50px);
        min-height: 400px;
        background-color: #FFF;
        box-sizing: border-box;
        transition: all 0.3s;
    }

    @media all and (max-width: 600px) {
        .slide-item {
            width: calc(100vw - ${2*sideButtonSize}px);
            height: calc(100vh - 200px);
        }

        .carousel-control {
            &.left, &.right {
                height: calc(100vh - 200px);
            }
        }
    }

    .carousel.slide {
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }

    .bottom-button {
        padding: 10px 20px;
        margin-top: 20px;
        margin-bottom: 50px;
        width: 100%;
        text-align: center;
        &.disable {
            cursor: not-allowed;
            box-shadow: none;
            background-color: #AAA !important;
        }
    }

    .text-red {
        color: red;
        font-size: 1em;
    }

    form {
        padding: 30px;

        label {
            font-weight: 700;
        }
    }

    .button-disable {
        cursor: not-allowed;
        box-shadow: none;
        background-color: #AAA !important;
    }
`;

const Form_Order_New = ['Credential', 'Basic Info'];
const Form_Order = ['Basic Info', 'Credential', 'Job Description'];
const Form = {
    'Credential': [
        {
            'label': 'Username',
            'type': 'text',
            'default': '',
            'value': 'Admin',
            'icon': 'w3-xxlarge fa fa-user',
            'isRequired': true,
            'placeholder': 'Username'
        },
        {
            'label': 'Password',
            'type': 'password',
            'default': '',
            'value': 'password1234Eiei',
            'icon': 'w3-xxlarge fa fa-key',
            'isRequired': true,
            'placeholder': 'Password'
        },
        {
            'label': 'Confirm Password',
            'type': 'password',
            'default': '',
            'value': 'password1234Eiei',
            'icon': 'w3-xxlarge fa fa-key',
            'isRequired': true,
            'placeholder': 'Password'
        }
    ],
    'Basic Info': [
        {
            'label': 'Company Name',
            'type': 'text',
            'default': '',
            'value': 'Microsoft',
            'icon': 'w3-xxlarge fa fa-user',
            'isRequired': true,
            'placeholder': 'Company Name'
        }, {
            'label': 'Company Description',
            'type': 'textarea',
            'default': '',
            'value': 'Founded in 1975, Microsoft (Nasdaq “MSFT”) is the worldwide leader in software, services, devices and solutions that help people and businesses realize their full potential. We believe in what people make possible Our mission is to empower every person and every organization on the planet to achieve more.',
            'icon': 'w3-xxlarge fa fa-pencil',
            'isRequired': false,
            'placeholder': 'Company Description'
        }
    ],
    'Job Description': [
        {
            'label': 'Job Title',
            'type': 'select',
            'options': JobList,
            'default': '',
            'value': '',
            'icon': 'w3-xxlarge fa fa-address-card',
            'isRequired': true,
            'placeholder': 'Job Title'
        }, {
            'label': 'Job Qualification',
            'type': 'list',
            'default': [''],
            'value': [''],
            'icon': 'w3-xxlarge fa fa-tasks',
            'isRequired': true,
            'placeholder': 'Job Skills'
        }, {
            'label': 'Minimum Experience',
            'type': 'input',
            'default': '',
            'value': '',
            'icon': 'w3-xxlarge fa fa-calendar',
            'isRequired': true,
            'placeholder': 'Year'
        }, {
            'label': 'Job Responsibility',
            'type': 'textarea',
            'default': '',
            'value': '',
            'icon': 'w3-xxlarge fa fa-pencil',
            'isRequired': false,
            'placeholder': 'Jon Responsibility'
        }
    ]
}

const itemInfo = {
    'Name': 'John Smith',
    'Gender': 'Male',
    'Age': '33',
    'Skills': ['C', 'C#', 'C++', 'Python', 'Go lang', 'Prolog', 'Haskell', 'Javascript', 'HTML', 'CSS'],
    'Description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis eros ac ex consequat, porta finibus quam facilisis. Duis aliquet blandit enim, eu eleifend erat pulvinar eu. Nullam tristique nibh lacus, nec aliquam quam dignissim et. Etiam fringilla erat et nisi molestie, eget vehicula ex viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur semper tellus at neque tristique, at ullamcorper neque pretium. Donec non iaculis libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla porta, quam a sagittis dapibus, nulla leo ultrices sem, nec congue tellus ante eu mi.',
    'Contact': {
        'Tel': '0xxxxxxx',
        'Email': 'example@gmail.com',
        'Github': 'Link to github',
        'Facebook': 'Link to facebook',
        'Linkedin': 'Link to linkedin'
    },
    'Match': 0,
    'State': 'NA',
    'Avatar': 'http://via.placeholder.com/350x150'
}

const info = [{
    ...itemInfo,
    'Match': 90,
    'Avatar': Avatar[Math.floor(Math.random() * (16))]
}, {
    ...itemInfo, 'Name': 'Jack Smith',
    'Match': 80,
    'Avatar': Avatar[Math.floor(Math.random() * (16))]
}, {
    ...itemInfo, 'Name': 'Jill Smith',
    'Match': 70,
    'Avatar': Avatar[Math.floor(Math.random() * (16))]
}];

function trim(str) {
    if (typeof str === "string") return str.replace(/^\s+|\s+$/g, '');
    return str;
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'showSubmit': false,
            'passwordValidate': false,
            'Form_Order': Form_Order_New,
            'Form': Form
        }

        this.onChangeFormField = this.onChangeFormField.bind(this);
        this.onCheckFilled = this.onCheckFilled.bind(this);
        this.onCheckPassword = this.onCheckPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        setTimeout(() => {
            this.onCheckFilled();
            this.onCheckPassword();
            if(this.props.store.isLogin) {
                if (this._isMounted) {
                    this.setState((prevState) => {
                        return ({
                            ...prevState,
                            'Form_Order': Form_Order
                        });
                    }, () => {
                        this.onCheckFilled();
                        this.onCheckPassword();
                    })
                }
            }
        }, 0);
    }

    onChangeFormField(topic, ind, value) {
        if(this._isMounted) {
            this.setState((prevState) => {
                let new_Form = { ...prevState.Form };
                new_Form[topic][ind].value = value
                return ({
                    ...prevState,
                    'Form': new_Form
                });
            }, this.onCheckFilled);
        }
    }

    onSubmit() {
        if(this.props.store.isLogin) {
            alert('Updated profile');
            this.props.onSetIsLoading(true);
            //Do ajax call here
            const data = {
                'title': trim(_.get(this.state, "Form['Job Description'][0].value", '')),
                'Qualifications': _.get(this.state, "Form['Job Description'][1].value", []).map((text) => trim(text)).filter((text) => text.length > 0),
                'Experience (years)': Number(trim(_.get(this.state, "Form['Job Description'][2].value", '0')))
            }

            let config = {
                'headers': {
                    'crossDomain': true
                }
            }

            // console.log(data)
            // {'header': {'Authorization': 'Basic Zm1pbmRleDpmb2N1c2t1eQ=='}}
            Axios.post(PostJobURI, data, config).then((res) => {
                this.props.onUpdateResult(res.data);
                this.props.onSetIsLoading(false);
            }, (error) => {
                // console.log(error, JSON.parse(JSON.stringify(error)));
                this.props.onUpdateResult(info);
                this.props.onSetIsLoading(false);
            })

            // setTimeout(() => {
            //     this.props.onSetIsLoading(false);
            //     this.props.onUpdateResult(info);
            // }, 1000);
        }
        else {
            alert('Registered profile');
        }
    }

    onCheckPassword() {
        if(this._isMounted) {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    'passwordValidate': (_.get(prevState, 'Form["Credential"][1].value', '123') === _.get(prevState, 'Form["Credential"][2].value', '012')) && (_.get(prevState, 'Form["Credential"][2].value') !== '')
                });
            })
        }
    }

    onCheckFilled() {
        if (this._isMounted) {
            this.setState((prevState) => {
                return ({
                    ...prevState,
                    'showSubmit': this.state.Form_Order.reduce((bool, topic) => {
                        return this.state.Form[topic].reduce((Bool, item) => {
                            if (item.isRequired) {
                                if(item.type === "list") {
                                    let isItemFilled = false;
                                    for(let i = 0; i < item.value.length && !isItemFilled; i++) {
                                        if(item.value[i] !== '') isItemFilled = true;
                                    }
                                    return Bool && isItemFilled;
                                }
                                return Bool && item.default !== item.value;
                            }
                            return Bool;
                        }, true) && bool;
                    }, true)
                });
            })
        }
    }

    onResizeTextArea(e) {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUmount() {
        this._isMounted = false;
    }

    componentWillMount() {
        this.props.setBgColor('#62B4FA');
    }

    render() {
        return (
            <RegisterStyle len={this.state.Form_Order.length}>
                <Carousel interval={null} wrap={false}>
                    {
                        this.state.Form_Order.map((topic, Index) => {
                            return (
                                <Carousel.Item key={Index}>
                                    <div className="slide-item" key={Index}>
                                        <div className="w3-container w3-blue">
                                            <h1>{topic}</h1>
                                        </div>
                                        <form className="w3-container" onSubmit={(e) => e.preventDefault() && false}>
                                            {
                                                (this.state.Form[topic].map((item, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <div className="w3-col" style={{'width': '50px'}}><i className={item.icon}></i></div>
                                                            <div className="w3-rest">
                                                                <label>{item.label} <span className="text-red">{item.isRequired ? '*' : ''}</span></label>
                                                                {
                                                                    (item.type === "textarea" ? (
                                                                        <textarea
                                                                            className="w3-input"
                                                                            type={item.type}
                                                                            value={item.value}
                                                                            onChange={(e) => {
                                                                                this.onChangeFormField(topic, key, e.target.value)
                                                                                this.onResizeTextArea(e);
                                                                            }}
                                                                            rows="4"
                                                                            placeholder={item.placeholder}
                                                                        />
                                                                    ) : (item.type === "select") ? (
                                                                        <select onChange={
                                                                                (e) => {
                                                                                    this.onChangeFormField(topic, key, e.target.value)
                                                                                }
                                                                            }
                                                                            defaultValue={''}
                                                                        >
                                                                            <option value="" disabled>Choose Your Job</option>
                                                                            {
                                                                                (item.options).map((job, key) => {
                                                                                    return (
                                                                                        <option value={job} key={key}>{job}</option>
                                                                                    );
                                                                                })
                                                                            }
                                                                        </select>
                                                                    ) : (item.type === "password") ? (
                                                                        <input
                                                                            className="w3-input"
                                                                            type={item.type}
                                                                            value={item.value}
                                                                            onChange={(e) => {
                                                                                    this.onChangeFormField(topic, key, e.target.value)
                                                                                    this.onCheckPassword();
                                                                                }
                                                                            }
                                                                            placeholder={item.placeholder}
                                                                        />
                                                                    ) : (item.type === "list") ? (
                                                                        <ListText
                                                                            onChangeVal={(new_val) => {
                                                                                this.onChangeFormField(topic, key, new_val);
                                                                            }}
                                                                            placeholder={item.placeholder}
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            className="w3-input"
                                                                            type={item.type}
                                                                            value={item.value}
                                                                            onChange={(e) => this.onChangeFormField(topic, key, e.target.value)}
                                                                            placeholder={item.placeholder}
                                                                        />
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                }))
                                            }
                                        </form>
                                    </div>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
                {
                    <div
                        className={`w3-container w3-green w3-hover-shadow w3-card-2 active-shadow-none bottom-button ${this.state.showSubmit && this.state.passwordValidate ? '' : 'disable'}`}
                        onClick={() => {
                            if(this.state.showSubmit && this.state.passwordValidate) this.onSubmit();
                        }}
                    >
                        Submit
                    </div>
                }
            </RegisterStyle>
        );
    }
}

export default Register;
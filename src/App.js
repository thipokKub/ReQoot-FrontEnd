import React, { Component } from 'react';
import AppStyle from './Styled-Components/App';
import ContentStyle from './Styled-Components/Content';
import NavBar from './Components/NavBar';
import Loader from './Components/Loader';
import styled from 'styled-components';
import _ from 'lodash';

import RegisterPage from './Pages/Register';
import HomePage from './Pages/Home';
import ResultPage from './Pages/Result';

const height = 70;
const MainContent = styled.div`
    overflow: scroll;
    height: calc(100vh);
    width: 100%;
    padding: 90px 60px 30px 60px;
    box-sizing: border-box;
    background-color: ${props => props.bgColor};
    z-index: 1;

    @media all and (max-width: 600px) {
        width: calc(100vw);
    }
`;

// const Normal = {
//     'pageRank': ['Home', 'Result', 'Edit Profile', 'Training Data'],
//     'pageMap': {

//     }
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.onSwitchActive = this.onSwitchActive.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onModifyValue = this.onModifyValue.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onCalculateColor = this.onCalculateColor.bind(this);
        this.setBgColor = this.setBgColor.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onUpdateResult = this.onUpdateResult.bind(this);
        this.onSetIsLoading = this.onSetIsLoading.bind(this);

        this.state = {
            'isActive': false,
            'inSelection': 0,
            'pageSort': ['Home'],
            'pageMap': {'Home': <div>Hello</div>},
            'bgColor': '#F1F1F1',
            'pageIcon': ['fa fa-user'],
            'isLogin': false,
            'isLoading': false,
            'result': []
        }
    }

    onUpdateResult(value) {
        if (this._isMounted) {
            this.setState((prevState) => {
                let pageMap = {}
                let new_state = { ...prevState };
                new_state.result = value;
                if(prevState.pageSort.length === 2) {
                    pageMap = {
                        'Home': (<HomePage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} onLogin={this.onLogin} store={new_state} setBgColor={this.setBgColor} onRegisterRedirect={() => this.onSelect(1)} />),
                        'Register': <RegisterPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={new_state} setBgColor={this.setBgColor} />
                    }
                } else {
                    pageMap = {
                        'Home': (<HomePage onSetIsLoading={this.onSetIsLoading} onLogin={this.onLogin} store={new_state} setBgColor={this.setBgColor} onRegisterRedirect={() => this.onSelect(1)} />),
                        'Edit Profile': <RegisterPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={new_state} setBgColor={this.setBgColor} />,
                        'Result': <ResultPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={new_state} setBgColor={this.setBgColor} />
                    }
                }
                return {
                    ...prevState,
                    'result': value,
                    'pageMap': pageMap
                };
            })
        }
    }

    onLogin(username, password) {
        //Do something
        let new_state = { ...this.state };
        new_state.isLogin = true;
        new_state.pageRank = ['Home', 'Edit Profile', 'Result'];
        new_state.pageIcon = ['fa fa-user', 'fa fa-pencil', 'fa fa-file-text-o'];
        const OldUser = {
            'pageRank': ['Home', 'Edit Profile', 'Result'],
            'pageIcon': ['fa fa-user', 'fa fa-pencil', 'fa fa-file-text-o'],
            'pageMap': {
                'Home': (<HomePage onSetIsLoading={this.onSetIsLoading} onLogin={this.onLogin} store={new_state} setBgColor={this.setBgColor} onRegisterRedirect={() => this.onSelect(1)} />),
                'Edit Profile': <RegisterPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={new_state} setBgColor={this.setBgColor} />,
                'Result': <ResultPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={this.state} setBgColor={this.setBgColor} />
            }
        }

        this.onChangeValue('isLoading', true);
        let _this = this;
        setTimeout(() => {
            if (_this._isMounted) {
                _this.setState((prevState) => {
                    return {
                        ...prevState,
                        'isLogin': true,
                        'pageSort': OldUser.pageRank,
                        'pageIcon': OldUser.pageIcon,
                        'pageMap': OldUser.pageMap,
                        'isLoading': false
                    };
                })
            }
        }, 2000);
    }

    onLogout() {
        //Do something
        let new_state = { ...this.state };
        new_state.inSelection = 0;
        new_state.isLogin = false;
        new_state.pageRank = ['Home', 'Register'];
        new_state.pageIcon = ['fa fa-user', 'fa fa-pencil'];
        const NewUser = {
            'pageRank': ['Home', 'Register'],
            'pageIcon': ['fa fa-user', 'fa fa-pencil'],
            'pageMap': {
                'Home': (<HomePage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} onLogin={this.onLogin} store={new_state} setBgColor={this.setBgColor} onRegisterRedirect={() => this.onSelect(1)} />),
                'Register': <RegisterPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={new_state} setBgColor={this.setBgColor} />
            }
        }
        this.onChangeValue('isLoading', true);
        let _this = this;
        setTimeout(() => {
            if (_this._isMounted) {
                _this.setState((prevState) => {
                    return {
                        ...prevState,
                        'inSelection': 0,
                        'isLogin': false,
                        'pageSort': NewUser.pageRank,
                        'pageMap': NewUser.pageMap,
                        'pageIcon': NewUser.pageIcon,
                        'isLoading': false
                    };
                })
            }
        }, 2000);
    }

    onChangeValue(propertyName, newValue) {
        if (this._isMounted) {
            this.setState((prevState) => {
                let newState = { ...prevState };
                newState[propertyName] = newValue
                return (newState);
            })
        }
    }

    setBgColor(value) {
        this.onChangeValue('bgColor', value);
    }

    onCalculateColor() {
        let color = this.state.bgColor;
        color = color.replace('#', '');
        let r = parseInt(color.slice(0, 2), 16);
        let g = parseInt(color.slice(2, 4), 16);
        let b = parseInt(color.slice(4, 6), 16);
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186;
    }

    /*  
    *   Callback take prevState as input and spit out modifed State
    */  

    onModifyValue(propertyName, callback) {
        if(this._isMounted && typeof _.get(this.state, propertyName) !== "undefined") {
            this.setState((prevState) => {
                return callback({ ...prevState });
            })
        }
    }

    onSwitchActive() {
        this.onChangeValue('isActive', !this.state.isActive);
    }

    onSelect(id) {
        // let _this = this;
        // this.onChangeValue('isLoading', true);
        // setTimeout(() => {
        //     _this.onChangeValue('inSelection', id);
        //     _this.onChangeValue('isLoading', false);
        // }, 0);
        this.onChangeValue('inSelection', id);
    }

    onSetIsLoading(val) {
        this.onChangeValue('isLoading', val);
    }

    componentDidMount() {
        this._isMounted = true;
        const NewUser = {
            'pageRank': ['Home', 'Register'],
            'pageIcon': ['fa fa-user', 'fa fa-pencil'],
            'pageMap': {
                'Home': (<HomePage onSetIsLoading={this.onSetIsLoading} onLogin={this.onLogin} store={this.state} setBgColor={this.setBgColor} onRegisterRedirect={() => this.onSelect(1)} />),
                'Register': <RegisterPage onSetIsLoading={this.onSetIsLoading} onUpdateResult={this.onUpdateResult} store={this.state} setBgColor={this.setBgColor} />
            }
        }

        this.setState((prevState) => {
            return ({
                ...prevState,
                'pageSort': NewUser.pageRank,
                'pageMap': NewUser.pageMap,
                'pageIcon': NewUser.pageIcon
            });
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        if(this.state.isLoading) {
            return <Loader />
        }
        return (
            <AppStyle>
                <ContentStyle isActive={this.state.isActive}>
                    <button data-role='hamburger' className={`square-round outline ${this.onCalculateColor() ? 'black' : 'white'}`} onClick={this.onSwitchActive}>
                        <i className="fa fa-bars" />
                    </button>
                    <MainContent height={height} bgColor={this.state.bgColor}>
                        {this.state.pageMap[this.state.pageSort[this.state.inSelection]]}
                    </MainContent>
                </ContentStyle>
                <NavBar isLogin={this.state.isLogin} onLogout={this.onLogout} isActive={this.state.isActive} onClickOption={this.onSelect} state={this.state} />
            </AppStyle>
        );
    }
}

export default App;

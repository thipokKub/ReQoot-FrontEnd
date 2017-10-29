import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../Images/ReQoot.png';

const HomeStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .fa {
        margin-right: 10px;
    }

    .card {
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 20px;
        text-align: center;

        img {
            width: 100%;
            max-width: 300px;
            margin-bottom: 20px;
        }

        div.bio {
            text-align: left;
            :before {
                content: " ";
                display: inline-block;
                width: 40px;
            }
        }

        .content {
            padding: 30px 40px;
        }
    }

    @media all and (max-width: 1000px) {
        flex-wrap: wrap;
    }
`;

const SpanAnchor = styled.div`
    cursor: pointer;
    display: inline-block;
    text-decoration: underline;
    
    &:hover {
        color: #AAA;
    }
`;

class HomePage extends Component {

    componentWillMount() {
        this.props.setBgColor('#F1F1F1');
    }

    render() {
        if (this.props.store.isLogin) {
            return (
                <HomeStyle>
                    <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                        <div className="w3-container w3-blue">
                            <h1>Welcome!</h1>
                        </div>
                        <div className="w3-container content w3-white">
                            <img src={logo} alt="test" />
                            <div className="bio">
                            This is the first prototype of ReQoot Project. The goal of our project is to match developers around the globe to the right job.
                        You just login into our prototype, we are glad that you decided to use our services. If you have any question please feel free to ask. We {`won't`} bite. We promises :-P.
                            </div>
                        </div>
                    </div>
                </HomeStyle>
            );
        }
        return (
            <HomeStyle>
                <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                    <div className="w3-container w3-blue">
                        <h1>Login</h1>
                    </div>
                    <div className="w3-container content w3-white">
                        <form onSubmit={(e) => e.preventDefault() && false}>
                            <div>
                                <label><i className="fa fa-user" />Username</label>
                                <input className="w3-input" type="text" value="Admin" />
                            </div>
                            <div>
                                <label><i className="fa fa-key" />Password</label>
                                <input className="w3-input" type="password" value="password1234Eiei" />
                            </div>
                        </form>
                    </div>
                    <div className="w3-container w3-green w3-card-2 w3-hover-shadow active-shadow-none" style={{ 'padding': '10px 20px', 'textAlign': 'center' }} onClick={this.props.onLogin}>
                        Login
                    </div>
                </div>
                <div className="w3-card-4 card" style={{ 'minWidth': '300px' }}>
                    <div className="w3-container w3-blue">
                        <h1>Welcome!</h1>
                    </div>
                    <div className="w3-container content w3-white">
                        <img src={logo} alt="test" />
                        <div className="bio">
                        This is the first prototype of ReQoot Project. The goal of our project is to match developers around the globe to the right job.
                        Please Login First to continue. If you {`don't`} have an account, please click the <SpanAnchor onClick={this.props.onRegisterRedirect}>here</SpanAnchor> or select 'Register' tab from side menu.
                        </div>
                    </div>
                </div>
            </HomeStyle>
        );
    }
}

export default HomePage;
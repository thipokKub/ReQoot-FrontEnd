import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const TopBarStyled = styled.div`
    width: 100vw;
    height: ${(props) => props.height}px;
    position: sticky;
    background-color: #FFF;
    display: flex;
    align-items: center;

    button {
        display: none;
        margin-left: 10px !important;
    }

    @media all and (max-width: 400px) {
        button {
            display: initial;
        }
    }
`;

const TopBar = (props) => {
    return (
        <TopBarStyled {...props}>
            <button className="square-round outline" onClick={props.onSwitchActive}>
                <i className="fa fa-bars" />
            </button>
        </TopBarStyled>
    );
}

export default TopBar;
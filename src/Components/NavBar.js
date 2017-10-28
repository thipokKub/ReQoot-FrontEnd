import React from 'react';
import NavStyle from '../Styled-Components/NavBar';

const colorTL = '#47CFFF';
const colorBR = '#107CDE';
const colorBtn = '#1372FF';
const colorBtnHover = '#0ADDFF';
const colorBtnActive = '#94e3ff';

const NavBar = (props) => {
    return (
        <NavStyle
            image={'http://absfreepic.com/absolutely_free_photos/small_photos/beautiful-modern-city-landscape-at-night-4845x3230_88175.jpg'}
            className={(props.isActive) ? "active" : ""}
            isActive={props.isActive}
            isLogin={props.isLogin}
            colorTopLeft={colorTL}
            colorBottomRight={colorBR}
            colorBtn={colorBtn}
            colorBtnHover={colorBtnHover}
            colorBtnActive={colorBtnActive}
        >
            <div className="content">
                <h2>MENU</h2>
                <ul>
                    {props.state.pageSort.map((name, key) => {
                        return (
                            <li
                                className={props.state.inSelection === key ? "selected" : ""}
                                key={key}
                                onClick={() => props.onClickOption(key)}
                            ><i className={props.state.pageIcon[key]} /> {name}</li>)
                    })}
                </ul>
                <div className="w3-red w3-card-2 w3-hover-shadow active-shadow-none logout" style={{ 'padding': '15px 20px' }} onClick={props.onLogout}>
                    Logout
                </div>
            </div>
            <div className="background">
                <div className="main-bg" />
                <div className="overlay-bg" />
            </div>
        </NavStyle>
    );
}

export default NavBar;
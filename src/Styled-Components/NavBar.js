import styled from 'styled-components';

const NavBarStyle = styled.div`
    height: 100vh;
    width: 300px;
    position: relative;
    transition: all 0.5s;

    .background {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        z-index: 3;

        .main-bg {
            width: 100%;
            height: 100%;
            background-color: black;
            background-image: url('${props => props.image}');
            background-repeat: no-repeat;
            background-position: center; 
            background-size: cover;
            position: absolute;
            opacity: 0.5;
            transition: all .5s;
        }

        .overlay-bg {
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom right, ${props => props.colorTopLeft}, ${props => props.colorBottomRight});
            position: absolute;
            opacity: 0.6;
        }
    }

    .content {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 5;
        top: 0px;
        text-align: center;
        color: #FFF;

        &:hover,
        &:focus {
            &+.background .main-bg {
                transform: scale(1.1);
            }
        }

        h2 {
            margin-top: 40px;
            margin-bottom: 60px;
        }

        ul {
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 20px;
                padding-left: 40px;
                transition: all 0.5s;

                .fa {
                    margin-right: 10px;
                }

                :after {
                    opacity: 0;
                    transition: all 0.5s;
                    content: " ";
                    width: 0;
                    height: 0;
                    border-top: calc(32px) solid transparent;
                    border-bottom: calc(32px) solid transparent;
                    border-left: calc(32px) solid ${props => props.colorBtn};
                    position: absolute;
                    right: 0%;
                    transform: translate(99%, -19px);
                    z-index: 5;
                    opacity: 0;
                }
            }

            li.selected {
                background-color: ${props => props.colorBtn};

                :after {
                    content: " ";
                    width: 0; 
                    height: 0; 
                    border-top: calc(32px) solid transparent;
                    border-bottom: calc(32px) solid transparent;
                    border-left: calc(32px) solid ${props => props.colorBtn};
                    position: absolute;
                    right: 0%;
                    transform: translate(99%, -19px);
                    opacity: 1;
                    z-index: 5;
                }
            }

            li:hover,
            li:focus{
                background-color: ${props => props.colorBtnHover};

                :after {
                    content: " ";
                    width: 0; 
                    height: 0; 
                    border-top: calc(32px) solid transparent;
                    border-bottom: calc(32px) solid transparent;
                    border-left: calc(32px) solid ${props => props.colorBtnHover};
                    position: absolute;
                    z-index: 5;
                    right: 0%;
                    opacity: 1;
                    transform: translate(99%, -19px);
                }
            }

            li:active {
                background-color: ${props => props.colorBtnActive};

                :after {
                    border-left: calc(32px) solid ${props => props.colorBtnActive};
                }
            }
        }
    }

    @media all and (max-width: 600px) {
        transform: translateX(-300px);
        z-index: 5;

        &.active {
            transform: translateX(0px);
        }

        li:hover,
        li:focus {
            transform: translateX(${props => !props.isActive ? '300px' : '0px'});
        }
    }

    .logout {
        display: ${props => props.isLogin ? 'block': 'none'};
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
`;

export default NavBarStyle;
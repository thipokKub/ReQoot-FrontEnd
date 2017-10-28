import styled from 'styled-components';

const AppStyle = styled.div`
    background-color: #FFF;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: #F1F1F1;
    font-size: 18px;

    * {
        -webkit-overflow-scrolling: touch;
    }

    button[data-role='hamburger'] {
        opacity: 0;
        visibility: hidden;
        margin-left: 20px !important;
        margin-top: 20px !important;
        position: absolute;
        transition: all 0.2s;
        font-size: 1.5em;
    }

    @media all and (max-width: 600px) {
        button[data-role='hamburger'] {
            opacity: 1;
            visibility: visible;
        }
    }

    button.invisible {
        background-color: rgba(0,0,0,0);
        border: none;
        outline: none;
        cursor: pointer;
    }

    button.outline {
        background-color: rgba(0,0,0,0);
        border: 1px solid rgba(160, 160, 160, 0.5);
        outline: none;
        cursor: pointer;

        &.black {
            border: 1px solid rgba(0, 0, 0, 0.5) !important;
            color: #000 !important;
        }

        &.white {
            border: 1px solid rgba(255, 255, 255, 0.5) !important;
            color: #FFF !important;
        }
    }

    button.square-round {
        height: 45px;
        width: 45px;
        border-radius: 20%;
        padding: 0px;
        margin: 0px;
    }

    select {
        /* styling */
        background-color: white;
        border: thin solid #878787;
        border-radius: 4px;
        display: block;
        font: inherit;
        line-height: 1.5em;
        box-sizing: border-box;
        padding: 0.2em 3.5em 0.1em 1em;

        /* reset */

        margin: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;

        background-image:
            linear-gradient(45deg, transparent 50%, gray 50%),
            linear-gradient(135deg, gray 50%, transparent 50%),
            linear-gradient(to right, #ccc, #ccc);
        background-position:
            calc(100% - 20px) calc(1em - 3px),
            calc(100% - 15px) calc(1em - 3px),
            calc(100% - 2.5em) 0.15em;
        background-size:
            5px 5px,
            5px 5px,
            1px 1.5em;
        background-repeat: no-repeat;
    }

    select:focus {
        background-image:
            linear-gradient(45deg, #008bdb 50%, transparent 50%),
            linear-gradient(135deg, transparent 50%, #008bdb 50%),
            linear-gradient(to right, #ccc, #ccc);
        background-position:
            calc(100% - 15px) calc(1em - 3px),
            calc(100% - 20px) calc(1em - 3px),
            calc(100% - 2.5em) 0.15em;
        background-size:
            5px 5px,
            5px 5px,
            1px 1.5em;
        background-repeat: no-repeat;
        border-color: #008bdb;
        color: #008bdb;
        outline: 0;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
`;

export default AppStyle;
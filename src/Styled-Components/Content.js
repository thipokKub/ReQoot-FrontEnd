import styled from 'styled-components';

const ContentStyle = styled.div`
    width: calc(100vw - 300px);
    height: 100vh;
    top: 0px;
    left: 300px;
    position: absolute;
    transition: all 0.5s;
    z-index: 1;
    box-sizing: border-box;

    @media all and (max-width: 600px) {
        transform: translateX(${props => props.isActive ? 0 : -300}px)
    }
`;

export default ContentStyle;
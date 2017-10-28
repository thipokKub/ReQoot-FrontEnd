import React from 'react';
import styled from 'styled-components';
import Image from './Image';
// import CPBContainer from './CPBContainer';

const exactWidth = 250;
const profileSize = 150;

const ItemStyle = styled.div`
    background-color: ${props => props.state === 'NA' ? '#FFF' : props.state === 'Accept' ? 'lightgreen' : 'pink'};
    max-width: 
    width: ${exactWidth}px;
    min-width: ${exactWidth}px;
    max-width: ${exactWidth}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0px;
    margin: 20px;

    > div {
        display: flex;
        flex-direction: row;

        > * {
            &.info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            flex: 1;
        }
    }
    
    .profile {
        min-width: ${profileSize}px;
        max-width: ${profileSize}px;
        width: ${profileSize}px;
        height: ${profileSize}px;
        min-height: ${profileSize}px;
        max-height: ${profileSize}px;
        border-radius: 50%;
        // margin-bottom: 20px;
        background-color: #AAA;
    }

    div.top {
        padding: 30px 15px 0px 15px;
    }

    div.middle {
        padding: 15px 15px 15px 15px;
        p:first {
            font-size: 22px;
        }
    }

    div.bottom {
        width: 100%;
        > div {
            padding: 10px;
            box-sizing: border-box;
        }
    }


`;

const DummyItem = styled.div`
    width: ${exactWidth + 40}px;
    min-width: ${exactWidth + 40}px;
    max-width: ${exactWidth + 40}px;
    height: 0px;
    min-height: 0px;
    max-height: 0px;
`;

const Item = (props) => {
    if(props.isDummy) {
        return (
            <DummyItem />
        );
    } else if(props.isEmpty) {
        return (
            <ItemStyle className={`w3-card-2 w3-hover-shadow active-shadow-none`} state={'NA'}>
                <div className="top">
                    <Image src={''} isUseBg={true} isPadding={true} imgClass="profile" divClass="profile" />
                </div>
                <div className="middle">
                    <div className="w3-container w3-center info">
                        <p>No Info...</p>
                    </div>
                </div>
            </ItemStyle>
        );
    }
    // <CPBContainer percent={props.info.Match} />

    return (
        <ItemStyle className={`w3-card-2 w3-hover-shadow active-shadow-none ${props.className}`} state={props.info.State}>
            <div className="top" onClick={props.onActive} data-toggle="modal" data-target="#myModal">
                <Image src={props.info.Avatar} isUseBg={true} isPadding={true} imgClass="profile" divClass="profile" />
            </div>
            <div className="middle" onClick={props.onActive} data-toggle="modal" data-target="#myModal">
                <div className="w3-container w3-center info">
                    <p>{props.info.Name}</p>
                </div>
            </div>
        </ItemStyle>
    );
}

export default Item;
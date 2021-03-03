import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './../../global/Title';
import Section from './../../global/Section';
import roomData from './../../../../src/rooms-data';
import Room from './room/Room';
import { media, setColor, setRem } from './../../../styles/Styles';


export default class Rooms extends Component {
   state = {
      rooms: roomData
   };
   render() {
      return (
         <Section color={setColor.lightGrey}>
            <Title title='our rooms' center />
            <RoomsCenter>
               {this.state.rooms.map(room => {
                  return <Room key={room.id} room={room} />;
               })}
            </RoomsCenter>
         </Section>
      );
   };
};

const RoomsCenter = styled.div`
	width: 90vw;
	margin: 0 auto;
	${media.tablet`
   display:grid;
   grid-template-columns:1fr 1fr;
   grid-column-gap:${setRem(40)};
   `};
	${media.desktop`
   width:100vw;
   max-width:1170px;
   padding:${setRem(16)};
   padding-bottom: ${setRem(32)};
   margin-bottom: ${setRem(54)};
   `};
	${media.large`
      grid-template-columns:repeat(4,1fr);
   `};
`;


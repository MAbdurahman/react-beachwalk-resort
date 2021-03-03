import React from 'react';
import styled from 'styled-components';
import Section from './../../global/Section';
import Title from './../../global/Title';
import aboutImage from './../../../img/aboutBcg.jpeg';
import { setBorder, setColor,setLetterSpacing, setRem, media } from './../../../styles/Styles';
import { PrimaryBtn } from './../../global/Buttons';

export default function About() {
   return (
		<Section>
			<AboutCenter>
				<div className='about-img'>
					<img src={aboutImage} alt='About us' />
				</div>
				<div className='about-info'>
					<Title title='about us' />
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Velit aut quos ea optio ipsa, molestiae officiis, voluptates
						itaque blanditiis nostrum est fugiat, architecto odit at atque
						obcaecati nihil! Cupiditate, error. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit dor.
					</p>
					<PrimaryBtn>read more</PrimaryBtn>
				</div>
			</AboutCenter>
		</Section>
	);
};

const AboutCenter = styled.div`
	.about-img,
	.about-info {
		padding: ${setRem(30)};
	}
	.about-img {
		img {
			width: 100%;
			display: block;
			${setBorder({ width: setRem(6), color: setColor.primaryColor })}
		}
	}
	.about-info {
		p {
			${setLetterSpacing(3)};
		}
	}
	width: 90vw;
	margin: 0 auto;
	${media.desktop`
   width:100vw;
   max-width:1170px;
	.about-img {
		padding: ${setRem(0)};
	}
	.about-info {
		padding-left: ${setRem(32)};
	}
   display:grid;
   grid-template-columns:1fr 1fr;
   grid-column-gap:${setRem(32)};
   .about-img, .about-info {
   align-self:center;
   }
   .about-info{
   p{
   width:80%;
   }
   }
   `}
`;


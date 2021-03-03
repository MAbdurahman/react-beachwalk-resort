import React from 'react';
import Hero from '../../../global/Hero';
import homeImage from '../../../../img/homeBcg.jpeg';
import Banner from './../../../global/Banner';
import {PrimaryBtn} from '../../../global/Buttons'

export default function Header() {
	return (
		<Hero img={homeImage}>
			<Banner
				greeting='welcome to'
				title='beachwalk resort'
				text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi provident eos sapiente deleniti in quisquam.'
			>
				<PrimaryBtn t='1rem'>view details</PrimaryBtn>
			</Banner>
		</Hero>
	);
}

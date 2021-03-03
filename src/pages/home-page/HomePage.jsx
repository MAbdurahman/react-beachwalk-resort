import React from 'react';
import Header from './../../components/page/home/header/Header';
import About from './../../components/page/about/About';
import Rooms from './../../components/page/rooms/Rooms';

export default function HomePage() {
	return (
		<>
			<Header />
			<About />
			<Rooms />
		</>
	);
}

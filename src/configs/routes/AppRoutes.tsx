import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import NossaHistoria from '../../pages/NossaHistoria';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<NossaHistoria />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;

import FloatingButton from '../Home/components/FloatingButton';
import ButtonAppBar from '../Home/components/Navbar';
import NossaHistoriaMobile from './components/Historia/HistoriaMobile';

const NossaHistoria = () => {
	return (
		<>
			<ButtonAppBar />
			<NossaHistoriaMobile />
			<FloatingButton />
		</>
	);
};

export default NossaHistoria;

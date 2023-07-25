import Assinaturas from './components/Assinaturas';
import CarouselDiv from './components/Carousel';
import ComoChegar from './components/ComoChegar';
import Footer from './components/Footer';
import MockupApp from './components/MockupApp';
import ButtonAppBar from './components/Navbar';
import Planos from './components/Planos';
import QuemSomosMobile from './components/QuemSomos/QuemSomosMobile';
import Servicos from './components/Servicos';

const Home = () => {
	return (
		<>
			<ButtonAppBar />
			<CarouselDiv />
			<Assinaturas />
			<Planos />
			<QuemSomosMobile />
			<MockupApp />
			<ComoChegar />
			<Servicos />
			<Footer />
		</>
	);
};

export default Home;

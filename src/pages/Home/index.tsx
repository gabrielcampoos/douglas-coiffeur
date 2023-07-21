import AssinaturasMobile from './components/Assinaturas/AssinaturasMobile';
import CarouselDiv from './components/Carousel';
import ComoChegar from './components/ComoChegar';
import Footer from './components/Footer';
import MockupApp from './components/MockupApp';
import ButtonAppBar from './components/Navbar';
import PlanosMobile from './components/Planos/PlanosMobile';
import Servicos from './components/Servicos';

const Home = () => {
	return (
		<>
			<ButtonAppBar />
			<CarouselDiv />
			<AssinaturasMobile />
			<PlanosMobile />
			<MockupApp />
			<ComoChegar />
			<Servicos />
			<Footer />
		</>
	);
};

export default Home;

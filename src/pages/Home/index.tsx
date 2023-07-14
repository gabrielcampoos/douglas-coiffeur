import CarouselDiv from './components/Carousel';
import ComoChegar from './components/ComoChegar';
import Footer from './components/Footer';
import MockupApp from './components/MockupApp';
import ButtonAppBar from './components/Navbar';
import Servicos from './components/Servicos';

const Home = () => {
	return (
		<>
			<ButtonAppBar />
			<CarouselDiv />
			<MockupApp />
			<ComoChegar />
			<Servicos />
			<Footer />
		</>
	);
};

export default Home;

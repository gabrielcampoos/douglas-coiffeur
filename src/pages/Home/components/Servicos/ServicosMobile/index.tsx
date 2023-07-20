import { Box, Button, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import BannerInterior from '../../../../../assets/images/banner-interior.png';

interface Props {
	children: React.ReactNode;
	translate: string;
}

const ServicosMobile = () => {
	const Section: React.FC<Props> = ({ children, translate }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		if (translate === 'Typography') {
			translate = 'translateY(-200px)';
		}

		if (translate === 'Button') {
			translate = 'translateY(70px)';
		}

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : translate,
					opacity: isInView ? 1 : 0,
					transition: 'all 2s 0.6s',
				}}
			>
				{children}
			</section>
		);
	};

	return (
		<>
			<Box
				id="ServicosMobile"
				component="main"
				sx={{
					width: '100%',
					height: '35vh',
					backgroundColor: '#000',
					backgroundImage: `url(${BannerInterior})`,
					backgroundSize: '100% 70%',
					backgroundPosition: '100% 100%',
					backgroundRepeat: 'no-repeat',
					padding: '2rem 0',
					// margin: '1rem 0',
					border: 'none'
				}}
			>
				<Container
					component="section"
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						border: 'none'
					}}
				>
					<Box width="100%" component="div">
						<Section translate="Typography">
							<Typography
								component="h2"
								color="#fff"
								fontSize={30}
								lineHeight={1}
								fontFamily="Khand, sans-serif"
								fontWeight={900}
								zIndex="1"
								paddingTop={16}
							>
								CORTE DE CABELO <br />
								<span
									style={{
										color: '#f6b332',
									}}
								>
									BARBA
								</span>
								<br />
								BIGODE <br />
								<span
									style={{
										color: '#f6b332',
									}}
								>
									E UMA EXPERIÊNCIA <br />
									ÚNICA
								</span>
							</Typography>
						</Section>
					</Box>
					<Box width="100%" component="div">
						<Section translate="Typography">
							<Button
								sx={{
									zIndex: '1',
									backgroundColor: '#f6b332',
									// padding: '1rem 6rem',
									left: '2rem',
									'&:hover': {
										color: '#fff',
										backgroundColor: 'darkslategrey',
										transition: 'color 0.5s ease-out',
									},
								}}
							>
								<a
									href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
									style={{
										textDecoration: 'none',
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontSize: '1rem',
										fontWeight: '600',
										letterSpacing: '0.1rem',
									}}
								>
									CONHEÇA TODOS OS SERVIÇOS
								</a>
							</Button>
						</Section>
					</Box>
				</Container>
			</Box>
			<Box
				component="div"
				width="100%"
				height="10vh"
				sx={{
					backgroundColor: '#000',
				}}
			></Box>
		</>
	);
};

export default ServicosMobile;

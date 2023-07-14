import { Box, Button, Container, Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import BannerInterior from '../../../../assets/images/banner-interior.png';

interface Props {
	children: React.ReactNode;
	translate: string;
}

const Servicos = () => {
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
				component="main"
				sx={{
					width: '100%',
					height: '70vh',
					backgroundColor: '#000',
					paddingTop: '8rem',
					backgroundImage: `url(${BannerInterior})`,
					backgroundSize: '100% 90%',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Container
					component="section"
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: '2rem',
					}}
				>
					<Box width="50%" height="100%" component="div">
						<Section translate="Typography">
							<Typography
								component="h2"
								color="#fff"
								fontSize={72}
								lineHeight="4rem"
								fontFamily="Khand, sans-serif"
								fontWeight={900}
								position="absolute"
								paddingTop="13rem"
								zIndex="1"
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
					<Box width="50%" height="100%" component="div">
						<Section translate="Typography">
							<Button
								sx={{
									position: 'relative',
									zIndex: '1',
									backgroundColor: '#ffde59',
									padding: '1rem 6rem',
									top: '-2.5rem',
									left: '2rem',
									marginTop: '30rem',
									'&:hover': {
										color: '#fff',
										backgroundColor: 'darkslategrey',
										transition: 'color 0.5s ease-out',
									},
								}}
							>
								<a
									href="#"
									style={{
										textDecoration: 'none',
										color: '#000',
										fontFamily: 'Khand, sans-serif',
										fontSize: '1.3rem',
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
export default Servicos;

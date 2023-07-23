import {
	Box,
	Button,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Mockup from '../../../../assets/images/mockup-app.png';
import MockupAppMobile from './MockupAppMobile';

interface Props {
	children: React.ReactNode;
}

const MockupApp = () => {
	const Section: React.FC<Props> = ({ children }) => {
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });

		return (
			<section
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 2s 0.6s',
				}}
			>
				{children}
			</section>
		);
	};

	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(!smDown && (
				<>
					<Box
						id="MockupApp"
						component="main"
						sx={{
							width: '100%',
							// height: '70vh',
							backgroundColor: '#ffde59',
							// position: 'absolute',
							// top: '90%',
							padding: '2rem 0',
						}}
					>
						<Container
							component="section"
							sx={{
								width: '100%',
								height: '70%',
								display: 'flex',
							}}
						>
							<Box
								width="100%"
								// height="100%"
								component="div"
								display="flex"
								flexDirection="column"
								justifyContent="center"
								gap={5}
							>
								<Typography
									component="h1"
									variant="h2"
									color="#fff"
									fontSize={70}
									lineHeight="3.5rem"
									fontFamily="Khand, sans-serif"
									fontWeight={700}
								>
									AGENDE ATRAVÉS <br />
									DO APP{' '}
									<span style={{ color: '#2596be' }}>
										BOOSKY
									</span>
								</Typography>
								<Typography component="p">
									Ser atendido por ordem de chegada gera
									filas, isso se tornou algo do passado. Use o
									Booksy para agendar seus horários a qualquer
									hora, onde quer que esteja e assim continue
									aproveitando da melhor maneira os serviços
									que você adora.
								</Typography>
								<Container
									disableGutters
									component="section"
									sx={{
										width: '100%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-start',
									}}
								>
									<Box component="a" width="50%">
										<a href="https://play.google.com/store/apps/details?id=net.booksy.customer&hl=pt_BR&gl=US">
											<img
												src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png"
												width="90%"
											/>
										</a>
									</Box>
									<Box component="a" width="50%">
										<a href="https://apps.apple.com/br/app/booksy-aplicativo-de-reservas/id723961236">
											<img
												src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png"
												width="100%"
											/>
										</a>
									</Box>
								</Container>
								<Button
									variant="contained"
									href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
									sx={{
										containedSecondary: '#2596be',
										backgroundColor: '#0d6efd',
										width: '98%',
										height: '11%',
										color: 'HighlightText',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '700',
										fontSize: '150%',
										letterSpacing: '0.1rem',
										'&.Mui-focused': {
											backgroundColor: 'white',
										},
									}}
								>
									AGENDAR AGORA
								</Button>
							</Box>

							{/* RIGHT BOX */}
							<Box
								width="100%"
								// height="100%"
								component="div"
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="1rem 2rem"
							>
								<Section>
									<img src={Mockup} width="100%" />
								</Section>
							</Box>
						</Container>
					</Box>
				</>
			)) || <MockupAppMobile />}
		</>
	);
};

export default MockupApp;

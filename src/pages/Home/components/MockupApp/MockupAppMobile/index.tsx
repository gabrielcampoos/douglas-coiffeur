import { Box, Container, Typography } from '@mui/material';

const MockupAppMobile = () => {
	return (
		<Box
			id="MockupMobileRef"
			component="main"
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: '#ffde59',
				paddingTop: '3rem',
			}}
		>
			<Container
				component="section"
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
				}}
			>
				<Box
					width="100%"
					height="100%"
					component="div"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					gap={5}
					padding="2rem 0"
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
						DO APP <span style={{ color: '#2596be' }}>BOOSKY</span>
					</Typography>
					<Typography component="p">
						Ser atendido por ordem de chegada gera filas, isso se
						tornou algo do passado. Use o Booksy para agendar seus
						horários a qualquer hora, onde quer que esteja e assim
						continue aproveitando da melhor maneira os serviços que
						você adora.
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
					<Box
						component="button"
						width="100%"
						height="11%"
						border="none"
						borderRadius="0.5rem"
						sx={{ backgroundColor: '#2596be' }}
					>
						<a
							href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
							style={{
								textDecoration: 'none',
							}}
						>
							<Typography
								color={'HighlightText'}
								fontFamily="Khand, sans-serif"
								fontWeight={700}
								fontSize="2.3rem"
								letterSpacing="0.1rem"
							>
								AGENDAR AGORA
							</Typography>
						</a>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default MockupAppMobile;

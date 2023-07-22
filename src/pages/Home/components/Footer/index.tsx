import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Button,
	Container,
	IconButton,
	Link,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../../../assets/images/logo.png';
import FooterMobile from './FooterMobile';

export default function Footer() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			{(!smDown && (
				<Box
					sx={{
						flexGrow: 1,
						backgroundColor: 'darkslategrey',
						height: '40vh',
					}}
				>
					<Container>
						<AppBar
							position="static"
							sx={{
								backgroundColor: 'darkslategrey',
								borderBottom: '1px solid #fff',
								boxShadow: 'none',
								paddingTop: '4rem',
							}}
						>
							<Toolbar
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									width: '100%',
									height: '20vh',
									zIndex: '99999',
								}}
							>
								<Box width="25%">
									<img src={Logo} alt="Logo Barbearia" />
								</Box>

								<Box
									sx={{
										width: '50%',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'space-between',
										alignItems: 'center',
										fontFamily: 'Khand, sans-serif',
										fontWeight: '600',
										letterSpacing: '0.09rem',
									}}
								>
									<Link
										href="https://api.whatsapp.com/send/?phone=5518997984039&text=Olá, gostaria de saber mais sobre os planos.&type=phone_number&app_absent=0"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'ASSINATURAS'}
									</Link>

									<Link
										href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'BOOKSY'}
									</Link>

									<Link
										href="https://www.google.com/maps/place/Dougla's+Coiffeur/@-22.6515273,-50.4194907,17z/data=!3m1!4b1!4m5!3m4!1s0x949539104f13fd7d:0xf3996aef55392f08!8m2!3d-22.6515345!4d-50.4173573"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'UNIDADE'}
									</Link>

									<Link
										href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'SERVIÇOS'}
									</Link>

									<Button
										sx={{
											// position: 'relative',
											zIndex: '1',
											backgroundColor: 'darkslategrey',
											// padding: '1rem 6rem',
											// top: '-2.5rem',
											// left: '2rem',
											// marginTop: '30rem',
											'&:hover': {
												color: '#fff',
												backgroundColor: '#f6b332',
												transition:
													'color 0.5s ease-out',
											},
										}}
									>
										<a
											href="https://booksy.com/pt-br/instant-experiences/widget/109844?instant_experiences_enabled=true&ig_ix=true&is_fb=1&fbclid=IwAR36ITBFrC5OklYW2VL4KAw8PHKB9vOozRh7pMCfQ6FE4T13569xYHLr-Mc"
											style={{
												textDecoration: 'none',
												color: '#fff',
												fontFamily: 'Khand, sans-serif',
												fontSize: '150%',
												fontWeight: '600',
												letterSpacing: '0.1rem',
											}}
										>
											AGENDAR
										</a>
									</Button>
								</Box>
								<Box
									width="25%"
									sx={{
										display: 'flex',
										justifyContent: 'initial',
									}}
								>
									<IconButton
										href="https://www.facebook.com/douglascoiffeurr/"
										aria-label="facebook"
										color="inherit"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										<FacebookIcon />
									</IconButton>
									<IconButton
										href="https://www.instagram.com/douglascoiffeursp/"
										aria-label="instagram"
										color="inherit"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										<InstagramIcon />
									</IconButton>
								</Box>
							</Toolbar>
						</AppBar>
						<Box
							width="100%"
							display="flex"
							alignItems="center"
							justifyContent="space-between"
						>
							<Typography
								width="50%"
								component="p"
								padding="3rem 0.1rem"
								color="HighlightText"
								fontSize="0.9rem"
							>
								Copyright © Barbearia Douglas Coiffeur. Todos os
								Direitos Reservados.
							</Typography>

							<Typography
								width="50%"
								component="p"
								padding="3rem 0.1rem"
								color="HighlightText"
								fontSize="0.7rem"
								textAlign="end"
							>
								Desenvolvido por:{' '}
								<span
									style={{
										backgroundColor: '#000',
										borderRadius: '3rem',
										padding: '0.2rem',
									}}
								>
									Gabriel Campos Alves
								</span>
							</Typography>
						</Box>
					</Container>
				</Box>
			)) || <FooterMobile />}
		</>
	);
}

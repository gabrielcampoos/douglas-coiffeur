import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
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
								<Box>
									<img src={Logo} alt="Logo Barbearia" />
								</Box>

								<Box
									sx={{
										width: '100%',
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
										href="#"
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
										href="#"
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
										href="#"
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

									<Link
										href="#"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'INSTITUTO COIFFEUR'}
									</Link>

									<Link
										href="#"
										underline="none"
										color={'HighlightText'}
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'CONTATO'}
									</Link>

									<Link
										href="#"
										underline="none"
										color={'HighlightText'}
										sx={{
											width: '50%',
											height: '100%',
											lineHeight: '5vh',
											textAlign: 'center',
											backgroundColor: '#f6b332',
											color: '#000',
											fontWeight: 'bold',
											borderRadius: '0.5rem',
											'&:hover': {
												color: '#fff',
												backgroundColor:
													'darkslategrey',
												transition:
													'color 0.5s ease-out',
											},
										}}
									>
										{'AGENDAR'}
									</Link>
								</Box>
								<Box
									width="5vw"
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
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

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Container, IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import Logo from '../../../../../assets/images/logo.png';

const NavbarMd = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				backgroundColor: '#000',
				height: '20vh',
			}}
		>
			<Container>
				<AppBar
					position="static"
					sx={{
						backgroundColor: '#000',
						width: '100%',
					}}
				>
					<Toolbar
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '20vh',
							zIndex: '99999',
						}}
					>
						<Box width="15%">
							<img src={Logo} alt="Logo Barbearia" width="60%" />
						</Box>

						<Grid
							container
							spacing={3}

							// sx={{
							// 	width: '75%',
							// 	display: 'flex',
							// 	justifyContent: 'space-between',
							// 	alignItems: 'center',
							// 	fontFamily: 'Khand, sans-serif',
							// 	fontWeight: '600',
							// 	letterSpacing: '0.09rem',
							// }}
						>
							<Grid item xs={4}>
								<Button
									href="#"
									sx={{
										width: '50%',
									}}
								>
									<Typography
										variant="button"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'BOOKSY'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={4}>
								<Button
									href="#"
									sx={{
										width: '50%',
									}}
								>
									<Typography
										variant="button"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'UNIDADE'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={4}>
								<Button
									href="#"
									sx={{
										width: '50%',
									}}
								>
									<Typography
										variant="button"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'SERVIÇOS'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={4}>
								<Button
									href="#"
									sx={{
										width: '100%',
									}}
								>
									<Typography
										variant="button"
										color="HighlightText"
										sx={{
											'&:hover': {
												color: '#ffde59',
											},
										}}
									>
										{'INSTITUTO COIFFEUR'}
									</Typography>
								</Button>
							</Grid>

							<Grid item xs={8}>
								<Button
									href="#"
									sx={{
										width: '100%',
									}}
								>
									<Typography
										variant="button"
										width="50%"
										sx={{
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
									</Typography>
								</Button>
							</Grid>
						</Grid>
						<Box
							width="10%"
							// padding="0 2%"
							sx={{
								display: 'flex',
								justifyContent: 'space-evenly',
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
			</Container>
		</Box>
	);
};

export default NavbarMd;

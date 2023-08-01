import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Box,
	Button,
	CardActionArea,
	Container,
	Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Logo from '../../../../../assets/images/logo-def.jpg';
import Carousel from '../../Carousel';
import EstruturaMd from '../../Estrutura/EstruturaMd';

const HistoriaMd = () => {
	return (
		<Box component="main" bgcolor="#000">
			<Container
				component="section"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					component="button"
					width="100%"
					height="11%"
					border="none"
					borderRadius="0.5rem"
					zIndex="999999999999"
					position="relative"
					mt={5}
					mb={5}
					sx={{
						backgroundColor: '#f6b332',
					}}
				>
					<Box
						width="100%"
						height="100%"
						border="0.15rem solid #f6b332"
						borderRadius="0.5rem"
						position="absolute"
						top="0.2rem"
						sx={{
							backgroundColor: 'transparent',
						}}
					></Box>
					<Typography
						width="100%"
						color={'HighlightText'}
						fontFamily="Khand, sans-serif"
						fontWeight={700}
						fontSize="2.3rem"
						letterSpacing="0.1rem"
					>
						NOSSA HISTÓRIA
					</Typography>
				</Box>
				<Box>
					<Typography
						component="p"
						color={'whitesmoke'}
						textAlign="justify"
						mb={5}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Laboriosam, aliquid? Illum iusto fuga nisi nam
						quam ducimus eum iste quibusdam voluptatibus cum porro
						autem, consequatur rem dolorem quod consectetur
						asperiores temporibus delectus quisquam. Mollitia nam
						non voluptatem, repellendus ipsa consequuntur at
						voluptatibus beatae, aut nostrum labore atque? Mollitia
						quo amet, neque nihil saepe minima possimus hic libero,
						quam qui, illo quasi earum quidem ex odit!
						Exercitationem molestiae a iste maiores, dolorem debitis
						distinctio est tempore asperiores inventore quas! Veniam
						eos commodi corporis quos, ratione optio ipsam ex quis
						assumenda, beatae eligendi quaerat. Ipsa inventore
						architecto beatae voluptate temporibus dolores,
						consequatur, ullam autem sed at corporis nesciunt qui ad
						voluptatibus, corrupti labore cum. Totam excepturi earum
						accusamus quos vero, exercitationem numquam amet
						distinctio accusantium repellat neque necessitatibus nam
						tempore asperiores tempora voluptatem aperiam itaque ad
						dolore eaque quidem iure aliquid. Quod quaerat
						laboriosam maiores pariatur eos minima consectetur
						deleniti quasi. Fugit, laboriosam. Sequi quasi
						laudantium, enim commodi numquam accusamus quos omnis
						rem quas voluptate! Soluta eum iure ducimus corrupti
						esse, cupiditate quos temporibus perferendis. Eius,
						possimus qui quasi deserunt necessitatibus quae quis
						blanditiis, velit quidem itaque rerum culpa incidunt
						illum recusandae saepe amet aliquid fuga nemo, corrupti
						corporis minus. Tempore, sint.
					</Typography>
				</Box>

				{/* CARD INSTAGRAM */}

				<Card
					sx={{
						width: '100%',
						backgroundColor: '#f6b332',
						padding: '0.2rem 0.2rem',
						mb: '3rem',
					}}
				>
					<Container
						disableGutters
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							border: '0.15rem solid #000',
						}}
					>
						<CardActionArea sx={{ marginBottom: '3rem' }}>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									gap: '1rem',
									fontFamily: 'Khand, sans-serif',
									fontWeight: '700',
								}}
							>
								{/* <Typography
									gutterBottom
									color={'HighlightText'}
									fontFamily="Khand, sans-serif"
									fontWeight={700}
									fontSize="2.3rem"
									letterSpacing="0.1rem"
									textAlign="center"
								>
									PLUS
								</Typography> */}
								<Button color="inherit">
									<InstagramIcon
										sx={{
											fontSize: '5rem',
										}}
									/>
								</Button>
								<Typography
									gutterBottom
									fontSize="1.3rem"
									component="div"
									textAlign="center"
									whiteSpace="nowrap"
									fontWeight="500"
									fontFamily="Khand, sans-serif"
								>
									Acompanhe a{' '}
									<span style={{ fontWeight: '700' }}>
										Dougla&apos;s Coiffeur
									</span>{' '}
									pelo <br />
									Instagram.
								</Typography>

								<a
									href="https://www.instagram.com/douglascoiffeursp/"
									style={{
										textDecoration: 'none',
										fontWeight: '500',
										fontFamily: 'Khand, sans-serif',
									}}
								>
									<Typography
										component="button"
										bgcolor="transparent"
										border="none"
										textAlign="center"
										display="flex"
										alignItems="center"
										justifyContent="center"
										fontWeight="500"
										fontFamily="Khand, sans-serif"
										fontSize="1.2rem"
									>
										<Box width="5%">
											<img
												width="100%"
												alt="Logo Douglas Coiffeur"
												src={Logo}
												style={{
													borderRadius: '2rem',
												}}
											/>
										</Box>

										<Box width="35%">
											Nos siga no instagram.
										</Box>
									</Typography>
								</a>
							</CardContent>
						</CardActionArea>
						<Carousel />
					</Container>
				</Card>
				<EstruturaMd />
			</Container>
		</Box>
	);
};

export default HistoriaMd;

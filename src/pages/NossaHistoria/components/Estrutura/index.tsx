import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import ListaImagens from '../ListaImagens';
import EstruturaMd from './EstruturaMd';
import EstruturaMobile from './EstruturaMobile';

const Estrutura = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			{(smDown && (
				<>
					<EstruturaMobile />
				</>
			)) ||
				(mdDown && (
					<>
						<EstruturaMd />
					</>
				)) || (
					<>
						<Box component="main" bgcolor="#000">
							<Container
								disableGutters
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
										ESTRUTURA
									</Typography>
								</Box>
								<Box>
									<Typography
										component="p"
										color={'whitesmoke'}
										textAlign="justify"
										mb={5}
									>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Laboriosam, aliquid?
										Illum iusto fuga nisi nam quam ducimus
										eum iste quibusdam voluptatibus cum
										porro autem, consequatur rem dolorem
										quod consectetur asperiores temporibus
										delectus quisquam. Mollitia nam non
										voluptatem, repellendus ipsa
										consequuntur at voluptatibus beatae, aut
										nostrum labore atque? Mollitia quo amet,
										neque nihil saepe minima possimus hic
										libero, quam qui, illo quasi earum
										quidem ex odit! Exercitationem molestiae
										a iste maiores, dolorem debitis
										distinctio est tempore asperiores
										inventore quas! Veniam eos commodi
										corporis quos, ratione optio ipsam ex
										quis assumenda, beatae eligendi quaerat.
										Ipsa inventore architecto beatae
										voluptate temporibus dolores,
										consequatur, ullam autem sed at corporis
										nesciunt qui ad voluptatibus, corrupti
										labore cum. Totam excepturi earum
										accusamus quos vero, exercitationem
										numquam amet distinctio accusantium
										repellat neque necessitatibus nam
										tempore asperiores tempora voluptatem
										aperiam itaque ad dolore eaque quidem
										iure aliquid. Quod quaerat laboriosam
										maiores pariatur eos minima consectetur
										deleniti quasi. Fugit, laboriosam. Sequi
										quasi laudantium, enim commodi numquam
										accusamus quos omnis rem quas voluptate!
										Soluta eum iure ducimus corrupti esse,
										cupiditate quos temporibus perferendis.
										Eius, possimus qui quasi deserunt
										necessitatibus quae quis blanditiis,
										velit quidem itaque rerum culpa incidunt
										illum recusandae saepe amet aliquid fuga
										nemo, corrupti corporis minus. Tempore,
										sint.
									</Typography>
								</Box>
							</Container>
							<ListaImagens />
							<Container
								component="section"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Box width="100%" alignSelf="start">
									<img
										width="270px"
										alt="Logo Douglas Coiffeur"
										src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/348239462_3544405635885761_1688043728463422154_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-7&_nc_sid=85a577&_nc_ohc=kIUIeMtK8PoAX8lCwvo&_nc_ht=scontent.fmii3-1.fna&oh=00_AfADJdFXP97sZV8ORkKVuPtKdYWxHh9Kj-ktTp6nQEBKLw&oe=64C37166"
									/>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="0 1rem"
									mb={2}
								>
									<LocationOnIcon
										htmlColor="#fff"
										fontSize="large"
									/>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
										ml={2}
									>
										Dougla&apos;s Coiffeur
									</Typography>
								</Box>
								<Box width="100%" padding="0 1.3rem" mb={2}>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
									>
										Av. Getúlio Vargas, 295 - Vila Nova
										Santana, Assis - SP, 19807-130
									</Typography>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="0 1rem"
									mb={2}
								>
									<WhatsAppIcon
										htmlColor="#fff"
										fontSize="large"
									/>
									<Typography
										component="p"
										color={'whitesmoke'}
										fontFamily="Khand, sans-serif"
										fontSize="1rem"
										letterSpacing="0.09rem"
										ml={2}
									>
										(18) 99798-4039
									</Typography>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									padding="1rem 1rem"
								>
									<FacebookIcon
										htmlColor="#fff"
										fontSize="large"
										sx={{ marginRight: '1rem' }}
									/>
									<InstagramIcon
										htmlColor="#fff"
										fontSize="large"
										sx={{ marginRight: '1rem' }}
									/>
									<LocationOnIcon
										htmlColor="#fff"
										fontSize="large"
									/>
								</Box>
								<Box
									width="100%"
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									padding="1rem 0"
								>
									<Typography
										width="50%"
										component="p"
										paddingTop="1rem"
										color="#fff"
										fontSize="1rem"
									>
										Copyright © Barbearia Douglas Coiffeur.
										Todos os Direitos Reservados.
									</Typography>

									<Typography
										width="50%"
										component="p"
										// padding="3rem 0.1rem"
										color="#fff"
										fontSize="0.8rem"
										textAlign="end"
									>
										Desenvolvido por:{' '}
										<span
											style={{
												backgroundColor: '#000',
												borderRadius: '3rem',
												padding: '0.1rem',
												color: '#fff',
											}}
										>
											Gabriel Campos Alves
										</span>
									</Typography>
								</Box>
							</Container>
						</Box>
					</>
				)}
		</>
	);
};

export default Estrutura;

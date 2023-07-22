import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Baboon from '../../../../assets/images/banner-baboon.png';
import MainBanner from '../../../../assets/images/main-banner.png';
import CustomAnimation from '../CustomAnimation';
import CarouselMd from './CarouselMd';
import CarouselMobile from './CarouselMobile';

export default function CarouselDiv() {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			{(smDown && (
				<>
					<CarouselMobile />
				</>
			)) ||
				(mdDown && (
					<>
						<CarouselMd />
					</>
				)) || (
					<>
						<div
							style={{
								display: 'flex',
								width: '100%',
								height: '70vh',
								backgroundColor: '#000',
							}}
						>
							<Box>
								<Carousel
									fade
									slide
									indicators={false}
									style={{
										width: '100%',
										height: '100%',
									}}
								>
									<Carousel.Item
										interval={4000}
										style={{
											width: '100%',
											height: '100%',
										}}
									>
										<CustomAnimation>
											<img
												className="w-100 h-100"
												src={MainBanner}
												alt="Image One"
											/>
										</CustomAnimation>
									</Carousel.Item>
									<Carousel.Item
										interval={4000}
										style={{
											top: '-5rem',
										}}
									>
										<img
											className=" w-100 h-100"
											src={Baboon}
											alt="Image Two"
										/>
									</Carousel.Item>
								</Carousel>
							</Box>
						</div>

						<Box
							width="100%"
							height="70vh"
							display="flex"
							justifyContent="center"
							alignItems="center"
						>
							<Box
								style={{
									// position: 'relative',
									// top: '-16rem',
									width: '20%',
									height: '100%',
								}}
							>
								<Carousel
									indicators={false}
									fade
									slide
									style={{
										width: '100%',
										height: '100%',
										// position: 'relative',
										top: '-45rem',
										// left: '45rem',
										backgroundColor: 'rgb(246, 179, 50)',
										zIndex: '1',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Carousel.Item
										interval={4000}
										style={{
											width: '100%',
											height: '100%',
										}}
									>
										<CustomAnimation>
											<Box
												style={{
													display: 'flex',
													flexDirection: 'column',
													justifyContent: 'center',
													alignItems: 'center',
													width: '100%',
													height: '100%',
												}}
											>
												<Typography
													style={{
														fontSize: '4rem',
														fontWeight: '700',
														color: 'rgb(66, 58, 56)',
														fontFamily:
															'Khand, sans-serif',
														textTransform:
															'uppercase',
														// transform:
														// 	'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
														// transformOrigin:
														// 	' 50% 50% 0px',

														// marginBottom: '2rem',
														// marginTop: '6rem',
														// letterSpacing: '0px',
														// whiteSpace: 'nowrap',
														lineHeight: '4.5rem',
														textAlign: 'center',
													}}
												>
													Tudo que
													<br />
													<span
														style={{
															color: '#fff',
														}}
													>
														você
													</span>
													<br />
													precisa
												</Typography>

												<p
													style={{
														fontSize: '1.6rem',
														fontFamily:
															'Khand, sans-serif',
														color: '#fff',
													}}
												>
													e um{' '}
													<strong>ambiente</strong>
													<br />
													pensado em{' '}
													<strong>você</strong>
												</p>
											</Box>
										</CustomAnimation>
									</Carousel.Item>

									<Carousel.Item
										interval={4000}
										style={{
											width: '100%',
										}}
									>
										<Box
											style={{
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'center',
												alignItems: 'center',
												width: '100%',
												height: '100%',
												paddingTop: '3.5rem',
											}}
										>
											<div
												className="tp-caption   tp-resizeme"
												id="slide-15-layer-6"
												data-x="['left','left','left','left']"
												data-hoffset="['429','429','191','-7']"
												data-y="['top','top','top','top']"
												data-voffset="['-1','-1','0','-154']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="image"
												data-responsive_offset="on"
												data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textAlign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: '5',
													position: 'relative',
													top: '7rem',
													width: '100%',
													height: '100%',
												}}
											>
												<img
													src="https://seuelias.com/v2018/wp-content/uploads/2021/12/Use-Baboon-Adquira-agora-mesmo.png"
													alt=""
													style={{
														width: '100%',
														height: '70vh',
													}}
												/>
												<div
													id="slide-15-layer-7"
													data-x="['left','left','left','left']"
													data-hoffset="['479','479','247','99']"
													data-y="['top','top','top','top']"
													data-voffset="['120','120','115','142']"
													data-width="none"
													data-height="none"
													data-whitespace="nowrap"
													data-type="image"
													data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"https:\/\/seuelias.com\/loja\/ ","delay":""}]'
													data-responsive_offset="on"
													data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
													data-textAlign="['inherit','inherit','inherit','inherit']"
													data-paddingtop="[0,0,0,0]"
													data-paddingright="[0,0,0,0]"
													data-paddingbottom="[0,0,0,0]"
													data-paddingleft="[0,0,0,0]"
													style={{
														zIndex: '6',
														position: 'relative',
														width: '100%',
														height: '100%',
														top: '-37rem',
														textAlign: 'center',
														transition:
															'[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]',
													}}
												>
													<img
														src="https://seuelias.com/v2018/wp-content/uploads/2021/12/unnamed-file.png"
														style={{
															width: '100%',
															padding: '0 1rem',
														}}
													/>
												</div>
											</div>

											<div
												id="slide-15-layer-9"
												data-x="['left','left','left','left']"
												data-hoffset="['474','474','237','84']"
												data-y="['top','top','top','top']"
												data-voffset="['343','343','330','403']"
												data-fontsize="['20','20','20','20']"
												data-lineheight="['22','22','22','22']"
												data-fontweight="['400','400','400','400']"
												data-width="none"
												data-height="none"
												data-whitespace="nowrap"
												data-type="image"
												data-responsive_offset="on"
												data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
												data-textAlign="['inherit','inherit','inherit','inherit']"
												data-paddingtop="[0,0,0,0]"
												data-paddingright="[0,0,0,0]"
												data-paddingbottom="[0,0,0,0]"
												data-paddingleft="[0,0,0,0]"
												style={{
													zIndex: '7',
													position: 'relative',
													top: '-25rem',
													transition:
														'[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]',
												}}
											>
												<img
													src="https://seuelias.com/v2018/wp-content/uploads/2021/12/para-o-seu-estilo.png"
													style={{
														width: '100%',
													}}
												/>
											</div>
										</Box>
									</Carousel.Item>
								</Carousel>
							</Box>
						</Box>
					</>
				)}
		</>
	);
}

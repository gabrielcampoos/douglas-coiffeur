import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

const CarouselMobile = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ReactSimplyCarousel
				centerMode={true}
				preventScrollOnSwipe={true}
				showSlidesBeforeInit={true}
				hideNavIfAllVisible={true}
				dotsNav={{ show: false }}
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={1}
				itemsToScroll={1}
				forwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
						position: 'absolute',
						right: '0',
						zIndex: '9999',
					},
					children: <span>{`>`}</span>,
				}}
				backwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
						position: 'absolute',
						left: '0',
						zIndex: '9999',
					},
					children: <span>{`<`}</span>,
				}}
				responsiveProps={[
					{
						itemsToShow: 2,
						itemsToScroll: 2,
						minWidth: 768,
					},
				]}
				speed={400}
				easing="linear"
			>
				{/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/350784269_280949171022351_7623475729657508596_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=6k0XWZfY-3gAX_gFLGf&_nc_ht=scontent.fmii3-1.fna&oh=00_AfDIMhThHvd7iLZahmuThdIZ6Nm-0eDfzxxFSIOHefwhKg&oe=64C47E0D"
						alt="Fotos carousel"
					/>
				</div>
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/348868259_658663939427896_2770609360713491566_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=-SU4ce5dAd8AX8ZsAev&tn=gA6jgh1Opc1017DJ&_nc_ht=scontent.fmii3-1.fna&oh=00_AfBrC5W0rOt_AttWegLrBHcYuChE6z4FvAECUh3O4xPefg&oe=64C41D09"
						alt="Fotos carousel"
					/>
				</div>
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/345846895_267342485699957_8474733359495645568_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=reHy_ftUA38AX_nT77t&_nc_ht=scontent.fmii3-1.fna&oh=00_AfBBUvcXJIfXRplWh5ly76lg9Kgu2MdSxx7PglrIMG7h3Q&oe=64C50A1B"
					/>
				</div>
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/263151874_2416763091790883_5863030972628509128_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=9e2e56&efg=eyJpIjoidCJ9&_nc_ohc=Cnee3h2JQ6IAX8w6_th&_nc_ht=scontent.fmii3-1.fna&oh=00_AfAbwNv2F9fWcjTplju0qm0ok4Tz796ZWtGTXmxqxgIxRA&oe=64C33CAB"
					/>
				</div>
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/273884691_2472279762905882_8123987263639042588_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=9e2e56&efg=eyJpIjoidCJ9&_nc_ohc=-VddSj_MpkMAX9neFu6&_nc_ht=scontent.fmii3-1.fna&oh=00_AfAqXQsA08QKys8TGjOAnRviGl36YN3vP2COKW4jPX68Bg&oe=64C38E23"
					/>
				</div>
				<div style={{ width: 300 }}>
					<img
						width="100%"
						src="https://scontent.fmii3-1.fna.fbcdn.net/v/t39.30808-6/352384464_1335802830359983_7243159226677795465_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=ROP7U56Xfy0AX-A7Kar&tn=gA6jgh1Opc1017DJ&_nc_ht=scontent.fmii3-1.fna&oh=00_AfAhttjXlhlrIUZxSFb70141V18-ValSDcaVyEZvwaL8eg&oe=64C4AB41"
					/>
				</div>
			</ReactSimplyCarousel>
		</div>
	);
};

export default CarouselMobile;

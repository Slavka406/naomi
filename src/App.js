// import { Button, Grid, Image, Menu, Tabs, Typography } from 'antd'
import { Col, Container, Row } from 'react-bootstrap'

// import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'

// import { Col, Row } from '@qonsoll/react-design'


// const { useBreakpoint } = Grid
// const { TabPane } = Tabs
// const { Title } = Typography


const UA = 'UA'
const EN = 'EN'

function App() {
	// const screens = useBreakpoint()
  const [language, setLanguage] = useState(UA)
	const [selectedTab, setSelectedTab] = useState(0)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [selectedPage, setSelectedPage] = useState(0)
	

  // const menu = (
  //   <Menu
  //     onClick={(e) => {
  //       setLanguage(e?.key)
  //     }}>
  //     <Menu.Item key={EN}>{EN}</Menu.Item>
  //     <Menu.Item key={UA}>{UA}</Menu.Item>
  //   </Menu>
  // )
	
	const tabs = [
		{ EN: 'Main', UA: 'Основне' },
		{ EN: 'Chef', UA: 'Від шефа' },
		{ EN: 'Sushi', UA: 'Суші' },
		// { EN: 'Season', UA: 'Сезонне' },
		{ EN: 'Alcohol', UA: 'Алкоголь' },
		// { EN: 'Banquet', UA: 'Банкет' },
	]

	const mainMenu = [
		{image: 'mainMenu/Str1.png', EN: 'Breakfasts', UA: 'Сніданки'},
		{image: 'mainMenu/Str2.png', EN: 'Cold snacks', UA: 'Холодні закуски'},
		{image: 'mainMenu/Str3.png', EN: 'Salads', UA: 'Салати'},
		{image: 'mainMenu/Str4.png', EN: 'Hot appetizers', UA: 'Гарячі закуски'},
		{image: 'mainMenu/Str5.png', EN: 'Bowl', UA: 'Боул'},
		{image: 'mainMenu/Str6.png', EN: 'First courses', UA: 'Перші страви'},
		{image: 'mainMenu/Str7.png', EN: 'First courses', UA: 'Перші страви'},
		{image: 'mainMenu/Str8.png', EN: 'Fish dishes and seafood', UA: 'Рибні страви та морепродукти'},
		{image: 'mainMenu/Str9.png', EN: 'Meat dishes', UA: 'М`ясні страви'},
		{image: 'mainMenu/Str10.png', EN: 'Meat dishes', UA: 'М`ясні страви'},
		{image: 'mainMenu/Str11.png', EN: 'Side dishes', UA: 'Гарніри'},
		{image: 'mainMenu/Str12.png', EN: 'Pasta', UA: 'Паста'},
		{image: 'mainMenu/Str13.png', EN: 'Hot meals', UA: 'Гарячі страви'},
		{image: 'mainMenu/Str14.png', EN: 'Coffee card', UA: 'Десерти'},
		{image: 'mainMenu/Str15.png', EN: 'First courses', UA: 'Кавова карта'},
		{image: 'mainMenu/Str16.png', EN: 'Tea card', UA: 'Чайна карта'},
		{image: 'mainMenu/Str17.png', EN: 'Tea card', UA: 'Чайна карта'},
		{image: 'mainMenu/Str18.png', EN: 'Beer menu and fresh fruit', UA: 'Пивне меню і фреші'},
		{image: 'mainMenu/Str19.png', EN: 'Drinks', UA: 'Напої'},
	]

	const chef = [
		{image: 'chef/Shef1.png', EN: 'From the chef', UA: 'Від шефа'},
		{image: 'chef/Shef2.png', EN: 'From the chef', UA: 'Від шефа'},
		{image: 'chef/Shef3.png', EN: 'From the chef', UA: 'Від шефа'},
	]

	const sushi = [
		{image: 'sushi/Sushi1.png', EN: 'Sushi menu', UA: 'Суші меню'},
		{image: 'sushi/Sushi2.png', EN: 'Sushi menu', UA: 'Суші меню'},
		{image: 'sushi/Sushi3.png', EN: 'Sushi menu', UA: 'Суші меню'},
		{image: 'sushi/Sushi4.png', EN: 'Sushi menu', UA: 'Суші меню'},
		{image: 'sushi/Sushi5.png', EN: 'Sushi menu', UA: 'Суші меню'},
		{image: 'sushi/Sushi6.png', EN: 'Sushi menu', UA: 'Суші меню'},
	]

	// const season = [
	// 	{image: 'mainMenu/Str1.png', EN: 'Breakfasts', UA: 'Сніданки'}
	// ]

	const alcohol = [
		{image: 'alcohol/Alko1.png', EN: 'Alcohol menu', UA: 'Алкогольне меню'},
		{image: 'alcohol/Alko2.png', EN: 'Alcohol menu', UA: 'Алкогольне меню'},
		{image: 'alcohol/Alko3.png', EN: 'Alcohol menu', UA: 'Алкогольне меню'},
		{image: 'alcohol/Wine1.png', EN: 'Vine card', UA: 'Винна карта'},
		{image: 'alcohol/Wine2.png', EN: 'Vine card', UA: 'Винна карта'},
		{image: 'alcohol/Wine3.png', EN: 'Vine card', UA: 'Винна карта'},
		{image: 'alcohol/Wine4.png', EN: 'Vine card', UA: 'Винна карта'},
	]
	
	// const banquet = [
	// 	{image: 'mainMenu/Str1.jpeg', EN: 'Breakfasts', UA: 'Сніданки'}
	// ]

	const TabItems = {
		0: mainMenu,
		1: chef,
		2: sushi,
		// 3: season,
		3: alcohol,
		// 5: banquet
	}

  return (
		<>
			<img src="background.png" style={{ position: 'absolute', width: '100vw', height: 'calc(100vh - 64px)', bottom: 0 }} alt='background'/>
			<div 
				style={{
					position:'absolute',
					width: '100vw', 
					height: '100vh', 
					backgroundColor: 'rgba(255, 255, 255, 0.40)', 
					transition: 'opacity, 1s ease-out)', 
					transitionProperty: 'color, background-color'
				}} 
			/>
			{/* Header */}
			<div 
				style={{
					width: '100vw', 
					height: '64px', 
					backgroundColor: 'white', 
					zIndex: 2, 
					position:'absolute', 
					display:'flex', 
					alignItems:'center', 
					paddingLeft: '12px',
					paddingRight: '12px',
					borderBottom: "2px solid rgb(212, 212, 212)",
					justifyContent:'space-between',
				}}>
				<img src="logo.png" alt='logo' style={{ width: '100px'}} />
				<div style={{display: 'flex', alignItems:'center'}} onClick={()=> setLanguage(language === UA ? EN : UA)}>
				<img src={language === UA ? "UA.png" : 'EN.jpg'} alt='ua' style={{ width: '20px', marginRight: '8px'}} />
					{language === UA ? "Українська" : 'English'}
				</div>
			</div>

			{/* Body */}
			<div style={{
				position:'absolute', 
				top: 150, 
				width: 'calc(100vw - 32px)', 
					// backgroundColor:'rgba(245, 237, 226, 0.85)', 
				height: '600px', 
				left: 16
				}}>
				{/* <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
				<p style={{ fontSize: '32px', lineHeight: '32px', fontWeight: 700, color: '#794e01', textShadow: '2px 2px 4px white'}}>
				{mainMenu[selectedPage][language]}
				</p>
				</div>
				<img src={mainMenu[selectedPage].image} alt={mainMenu[selectedPage].EN} style={{ width: '100%'}} /> */}
				
				{/* menu pages */}
				<div>
					<div>
						<div style={{display: 'flex', overflow: 'scroll'}}>
						{TabItems[selectedTab].map((menu, index) => 
							<p style={{ 
								fontSize: '14px', 
								whiteSpace: 'nowrap', 
								borderRadius: '8px',
								lineHeight: '20px', 
								fontWeight: 700, 
								color: '#000000b3', 
								padding: '4px', 
								marginLeft: index !== 0 && '4px',
								background: index === selectedPage ? 'white' : 'rgba(255,255,255, 0.4)', 
								boxShadow: "0px 1px 2px 0px rgba(3, 11, 23, 0.35)",
								}} 
								key={index} 
								onClick={() => setSelectedPage(index)}>
								{menu[language]}
							</p>
						)}
						</div>
						{TabItems[selectedTab].map(({image, EN}, index) => 
						index === selectedPage &&
							<img src={image} alt={EN} style={{ width: '100%'}} /> 
						)}
					</div>
				</div>
			</div>
			
			{/* Body shadow */}
			{isMenuOpen && (
					<div 
						style={{
							position:'absolute',
							width: '100vw', 
							height: '100vh', 
							backgroundColor: 'rgba(212, 212, 212, 0.50)', 
							transition: 'opacity, 1s ease-out)', 
							transitionProperty: 'color, background-color'
						}} 
					/>
			)}
		
			{/* Tabs */}
			<div 
			onClick={()=>!isMenuOpen &&  setIsMenuOpen(true)}
			style={{
				position: 'absolute', 
				top: 72, 
				width: 'calc(100vw - 32px)', 
				height: !isMenuOpen ? '42px' : `calc(42px * ${tabs.length})`, 
				backgroundColor: 'white', 
				left: 16, 
				borderRadius: '12px', 
				boxShadow: "0px 2px 8px 0px rgba(3, 11, 23, 0.35)",
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'height 0.75s',
				flexDirection:'row'
			}}>
				{isMenuOpen ? (
					<Container style={{overflow: 'auto', height: '100%', paddingTop: '16px'}}>
						<Row>
							{tabs.map((tab, index) => (
								<Col
									onClick={() => {
										setTimeout(()=>setIsMenuOpen(false), 250)
										setSelectedTab(index)
										setSelectedPage(0)
									}}
									key={index} 
									xs={12} 
									style={{
										transition: 'all 0.75s',
										height: '32px',
										display:'flex', 
										alignItems:'center', 
										justifyContent:'center',
										borderBottom: index !== tabs.length -1 ? "1px solid rgb(212, 212, 212)" : null,
										paddingBottom: '8px',
										paddingTop: '8px',
										backgroundColor: index === selectedTab ? 'rgba(245, 237, 226, 0.85)' : 'transparent'
										}}>
									{tab[language]}
								</Col>
							))}
						</Row>
					</Container>
				) : (
					tabs[selectedTab][language]
				)}
				<div 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					style={{
						backgroundColor: 'white', 
						position:'absolute', 
						bottom: -18, 
						height: '18px', 
						width: '120px',
						display:'flex', 
						justifyContent:'center', 
						borderRadius: '0px 0px 8px 8px',
						boxShadow: "0px 1px 2px 0px rgba(3, 11, 23, 0.35)"
					}}>
					<img src={isMenuOpen ? 'ArrowUp.png' : 'ArrowDown.png'} alt='arrow' style={{width: '32px', height: '32px', position:'absolute', top: -6}} />
				</div>
			</div>
			{/* {selectedPage !== mainMenu.length -1 && (
					<div 
						onClick={()=>  setSelectedPage(selectedPage+1)}
						style={{
							position:'fixed', 
							right: 4, 
							backgroundColor: 'rgba(255,255,255, 0.65)', 
							width: 40, 
							height: 40, 
							borderRadius: '50%', 
							top: '60%', 
							display: 'flex', 
							alignItems:'center',
							justifyContent:'center', 
							boxShadow: "0px 1px 4px 0px rgba(3, 11, 23, 0.35)"
							}}>
						<img src='ArrowRight.png' style={{width: '24px', height:'24px'}} />
					</div>
			)}
			{selectedPage !== 0 && (
				<div 
					onClick={()=>  setSelectedPage(selectedPage-1)}
					style={{
						position:'fixed', 
						left: 4, 
						backgroundColor: 'rgba(255,255,255, 0.65)', 
						width: 40, 
						height: 40, 
						borderRadius: '50%', 
						top: '60%', 
						display: 'flex', 
						alignItems:'center',
						justifyContent:'center', 
						boxShadow: "0px 1px 4px 0px rgba(3, 11, 23, 0.35)"
						}}>
					<img src='ArrowLeft.png' style={{width: '24px', height:'24px'}} />
				</div>
			)} */}
		</>
  )
}

export default App;

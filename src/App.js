import { Col, Container, Dropdown, Row } from 'react-bootstrap'

// import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import { useState } from 'react'

// import { Button, Dropdown, Grid, Image, Menu, Tabs, Typography } from 'antd'
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
		{ EN: 'Season', UA: 'Сезонне' },
		{ EN: 'Alcohol', UA: 'Алкоголь' },
		{ EN: 'Banquet', UA: 'Банкет' },
	]

	const mainMenu = [
		{image: 'Str1.jpeg', EN: 'Breakfasts', UA: 'Сніданки'},
		{image: 'Str2.jpeg', EN: 'Cold snacks', UA: 'Холодні закуски'},
		{image: 'Str3.jpeg', EN: 'Salads', UA: 'Салати'},
		{image: 'Str3_2.jpeg', EN: 'Salads', UA: 'Салати'},
		{image: 'Str4.jpeg', EN: 'Hot appetizers', UA: 'Гарячі закуски'},
		{image: 'Str5.jpeg', EN: 'First courses', UA: 'Перші страви'}
	]

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
						justifyContent:'space-between'
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
					top: 160, 
					width: 'calc(100vw - 32px)', 
					// backgroundColor:'rgba(245, 237, 226, 0.85)', 
					height: '600px', 
					left: 16
					}}>
						<div style={{width: '100%', display:'flex', justifyContent:'center'}}>
					<p style={{ fontSize: '32px', lineHeight: '32px', fontWeight: 700, color: '#794e01', textShadow: '2px 2px 4px white'}}>
					{mainMenu[selectedPage][language]}
					</p>
					</div>
					<img src={mainMenu[selectedPage].image} alt={mainMenu[selectedPage].EN} style={{ width: '100%'}} />
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
				{selectedPage !== mainMenu.length -1 && (
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
				)}
		</>
  )
}

export default App;

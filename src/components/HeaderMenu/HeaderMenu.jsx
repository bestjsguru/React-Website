import React from 'react';
import CloseIcon from '../../assets/images/icon_close.svg';
import './HeaderMenu.scss';

const HeaderMenu = (props) => {
	const { img, mainMenu, otherMenus, hide } = props;

	return (
		<div className="header-menu">
			<button className="close-button" onClick={hide}>
				<img src={CloseIcon} alt="button-icon" />
			</button>
			<div className="main-menu">
				<div className="img-wrapper" >
					<img src={img} alt="collection" />
				</div>
				<ul>
				{
					mainMenu.items.map(item => (
						<li>
							<a href={item.link}>{item.label}</a>
						</li>
					))
				}
				</ul>
			</div>
			<div className="other-menu">
			{otherMenus.map(menu=>(
				<div className="menu">
					<p className="title">{menu.title}</p>
					<ul>
						{
							menu.items.map(item => (
								<li>
									<a href={item.link}>{item.label}</a>
								</li>
							))
						}
					</ul>
				</div>
			))
			}
			</div>
		</div>
	)
}

export default HeaderMenu;
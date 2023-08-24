import React from "react";
import Order from "./Order";

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 11;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	// hour > +openHour && hour <= closeHour
	// 	? alert("We're currrently open!")
	// 	: alert("Sorry, We're closed");

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<div className="order">
					<p>SORRY WE'RE CLOSED.</p>
					<p>
						We are open from {openHour}:00 to {closeHour}:00
					</p>
				</div>
			)}
		</footer>
	);
};

export default Footer;

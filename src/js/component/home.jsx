import React from "react";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className ="container-fluid" style={{fontSize: "250px"}}>
			<div className = "d-flex justify-content-center}">
				<div>
					<i className="far fa-clock"></i>
				</div>
				<div>
					{props.days}:{props.hours}:{props.minutes}:{props.seconds}:{props.miliseconds}:{props.microseconds}
				</div>
			</div>
		</div>
	);
};

export default Home;

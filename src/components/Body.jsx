import React from "react";
function Body() {
    return (
        <>
         <section id="mainsec">
			  <div className="container">
				<section id="sec1">
					<div className="row rw">
					<div className="col-md-12">0</div>
				</div>
				</section>
				<section id="sec2">
				 <div className="row rw">
					<div className="col-md-3">AC</div>
					<div className="col-md-3">+/-</div>
					<div className="col-md-3">%</div>
					<div className="col-md-3 color">&#247;</div>
				</div>
				<div className="row rw">
					<div className="col-md-3">7</div>
					<div className="col-md-3">8</div>
					<div className="col-md-3">9</div>
					<div className="col-md-3 color">x</div>
				</div>
				<div className="row rw">
					<div className="col-md-3">4</div>
					<div className="col-md-3">5</div>
					<div className="col-md-3">6</div>
					<div className="col-md-3 color">-</div>
				</div>
				<div className="row rw">
					<div className="col-md-3">1</div>
					<div className="col-md-3">2</div>
					<div className="col-md-3">3</div>
					<div className="col-md-3 color">+</div>
				</div>
				<div className="row rw">
					<div className="col-md-6">0</div>
					<div className="col-md-3">.</div>
					<div className="col-md-3 color eq">=</div>
				</div>
				</section>	
			</div>	
     </section>

        </>
    );
}
export default Body;
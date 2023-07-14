import React from 'react'

function MainBanner() {
    const styles = {background:"#242c36 url(img/slider-01.jpg) no-repeat"}
  return (
    <>
    <section className="main-banner" style={styles}>
			<div className="container">
				<div className="caption">
					<h2>Build Your Career</h2>
					<form>
						<fieldset>
							<div className="col-md-4 col-sm-4 no-pad">
								<input type="text" className="form-control border-right" placeholder="Skills, Designation, Companies" />
							</div>
							<div className="col-md-3 col-sm-3 no-pad">
								<select className="selectpicker border-right">
								  <option>Experience</option>
								  <option>0 Year</option>
								  <option>1 Year</option>
								  <option>2 Year</option>
								  <option>3 Year</option>
								  <option>4 Year</option>
								  <option>5 Year</option>
								  <option>6 Year</option>
								  <option>7 Year</option>
								  <option>8 Year</option>
								  <option>9 Year</option>
								 <option>10 Year</option>
								</select>
							</div>
							<div className="col-md-3 col-sm-3 no-pad">
								<select className="selectpicker">
								  <option>Select Category</option>
								  <option>Accounf & Finance</option>
								  <option>Information & Technology</option>
								  <option>Marketing</option>
								  <option>Food & Restaurent</option>
								</select>
							</div>
							<div className="col-md-2 col-sm-2 no-pad">
								<input type="submit" className="btn seub-btn" value="submit" />
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
    </>
  )
}

export default MainBanner
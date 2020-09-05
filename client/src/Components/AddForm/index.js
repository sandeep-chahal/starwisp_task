import React, { useRef, useState } from "react";
import "./style.scss";
import { addDetails } from "../../utility";
import Popup from "../popup";

export default function AddForm({ setView, values = {} }) {
	const [loading, setLoading] = useState(false);
	const [popup, setPopup] = useState(false);
	const formValues = useRef(values);
	const submitHandler = (e) => {
		e.preventDefault();
		if (loading) return;
		setLoading(true);
		addDetails(formValues.current)
			.then(() => {
				setView("view");
			})
			.catch((err) => {
				setPopup(true);
				setLoading(false);
			});
	};
	const handleInputChange = (e) => {
		formValues.current[e.target.name] = e.target.value;
	};
	return (
		<form className="add-form">
			{popup && (
				<Popup closeHandler={() => setPopup(false)} msg="Enter Valid Data" />
			)}
			<div className="inputs">
				<div className="input-wrapper">
					<label>UID</label>
					<input
						type="number"
						name="uid"
						placeholder="UID"
						value={formValues["uid"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>University Name</label>
					<input
						type="text"
						name="uni_name"
						placeholder="University Name"
						value={formValues["uni_name"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>Reg Date</label>
					<input
						type="text"
						name="reg_date"
						placeholder="2020/01/01"
						value={formValues["reg_date"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>Exp Date</label>
					<input
						type="text"
						name="exp_date"
						placeholder="2020/01/01"
						value={formValues["exp_date"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>Web URL</label>
					<input
						type="text"
						name="web_url"
						placeholder="http://exaple.com"
						value={formValues["url"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>No. of Students</label>
					<input
						type="number"
						name="num_of_students"
						placeholder="Number"
						value={formValues["num_of_students"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>E-Mail</label>
					<input
						type="text"
						name="email"
						placeholder="Mail"
						value={formValues["email"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>Image URL</label>
					<input
						type="text"
						name="img_url"
						placeholder="http://expample.png"
						value={formValues["img_url"]}
						onChange={handleInputChange}
					/>
				</div>
				<div className="input-wrapper">
					<label>Contact Number</label>
					<input
						type="number"
						name="contact_num"
						placeholder="Number"
						value={formValues["contact_num"]}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<button onClick={submitHandler} type="submit">
				{loading ? "Wait" : "Submit"}
			</button>
		</form>
	);
}

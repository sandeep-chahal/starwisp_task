import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import { getDetails } from "../../utility";
import Popup from "../popup";

export default function ViewDetails() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);
	const totalPages = useRef(1);
	const [error, setError] = useState(false);

	const leftHandler = () => {
		if (page > 0) {
			getDetailHandler(page - 1, () => {
				setPage(page - 1);
			});
		}
	};
	const rightHandler = () => {
		if (page < totalPages.current - 1) {
			getDetailHandler(page + 1, () => {
				setPage(page + 1);
			});
		}
	};

	useEffect(() => {
		getDetailHandler(page, () => {});
	}, []);
	const getDetailHandler = (page, cb) => {
		getDetails(page, (data, error) => {
			if (error) {
				setError(true);
			} else {
				cb();
				setData(data.result);
				totalPages.current = data.totalPages || totalPages.current;
			}
			setLoading(false);
		});
	};
	const getTd = () => {
		return data.map((d) => (
			<tr>
				{Object.values(d).map((d, i) => (
					<td key={i}>{d || "Null"}</td>
				))}
			</tr>
		));
	};
	return (
		<div className="view">
			{loading ? (
				<div>Loading</div>
			) : error ? (
				<div>Something Wrong Happened!</div>
			) : (
				<div className="table-wrapper">
					<table>
						<tbody>
							{getTh()} {getTd()}
						</tbody>
					</table>
					<div className="btns">
						<div
							className={`${page > 0 ? "" : "disabled "}` + "left"}
							onClick={leftHandler}
						>
							&lt;&lt;
						</div>
						<div
							className={
								`${page < totalPages.current - 1 ? "" : "disabled "}` + "right"
							}
							onClick={rightHandler}
						>
							&gt;&gt;
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function getTh() {
	return (
		<tr>
			<th>UID</th>
			<th>University Name</th>
			<th>Reg Date</th>
			<th>Exp Date</th>
			<th>Img URL</th>
			<th>No of Students</th>
			<th>Email</th>
			<th>Web URl</th>
			<th>Contact Number</th>
		</tr>
	);
}

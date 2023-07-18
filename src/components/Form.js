import React, { useEffect, useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import { isValid, parse } from "date-fns";
import "./Form.css";

const Form = ({ handleDateChange }) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const err = [];

        if (!day || !month || !year) {
            err.push("This field is required");
        }

        const isValidDate = () => {
            const dateStr = `${year}-${month}-${day}`;
            const parsedDate = parse(dateStr, "dd-MM-yyyy", new Date());
            return isValid(parsedDate);
        };

        if (!isValidDate()) {
            if (
                !isValid(
                    parse(`${day}-${month}-${year}`, "dd-MM-yyyy", new Date())
                )
            ) {
                err.push("Must be a valid date");
            }

            if (month && (month < 1 || month > 12)) {
                err.push("Must be a valid month");
            }

            if (day && (day < 1 || day > 31)) {
                err.push("Must be a valid day");
            }

            if (year && year > new Date().getFullYear()) {
                err.push("Must be in the past");
            }
        }
        setErrors(err);
    }, [day, month, year]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (errors.length === 0) {
            setSubmitted(false);
            handleDateChange({ day, month, year });
        }
    };

    return (
        <form
            className={submitted && errors.length > 0 ? "error-input" : "form"}
            onSubmit={handleSubmit}
        >
            <div>
                <label
                    className={submitted && !day ? "error" : ""}
                    htmlFor="day"
                >
                    DAY
                    <input
                        className={!day && submitted ? "error-input" : ""}
                        type="text"
                        id="day"
                        placeholder="DD"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                    {submitted && !day && (
                        <small className="error">This field is required</small>
                    )}
                    {submitted && errors.includes("Must be a valid day") && (
                        <small className="error">Must be a valid day</small>
                    )}
                </label>
                <label
                    className={!month && submitted ? "error" : ""}
                    htmlFor="day"
                >
                    MONTH
                    <input
                        className={!month && submitted ? "error-input" : ""}
                        type="text"
                        id="month"
                        placeholder="MM"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    {submitted && !month && (
                        <small className="error">This field is required</small>
                    )}
                    {submitted && errors.includes("Must be a valid month") && (
                        <small className="error">Must be a valid month</small>
                    )}
                </label>
                <label
                    className={!year && submitted ? "error" : ""}
                    htmlFor="year"
                >
                    YEAR
                    <input
                        className={!year && submitted ? "error-input" : ""}
                        type="text"
                        id="year"
                        placeholder="YYYY"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    {submitted && !year && (
                        <small className="error">This field is required</small>
                    )}
                    {submitted && errors.includes("Must be in the past") && (
                        <small className="error">Must be in the past</small>
                    )}
                </label>
            </div>
            {submitted && errors.length > 0 && day && month && year && (
                <div className="error-container">
                    <small className="error">Must be a valid date</small>
                </div>
            )}
            <div className="btn-container">
                <button>
                    <img src={arrow} alt="calculate" />
                </button>
            </div>
        </form>
    );
};

export default Form;

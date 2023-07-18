import "./Result.css";

const Result = ({ selectedDate }) => {
    if (!selectedDate) {
        return (
            <div className="result-container">
                <p>
                    <span>--</span> years
                </p>
                <p>
                    <span>--</span> months
                </p>
                <p>
                    <span>--</span> days
                </p>
            </div>
        );
    }

    const { day, month, year } = selectedDate;

    // GEt current date
    const today = new Date();

    const selectedDateObj = new Date(year, month, day);

    const ageYrs =
        today.getMonth() >= selectedDateObj.getMonth()
            ? today.getFullYear() - selectedDateObj.getFullYear()
            : today.getFullYear() - selectedDateObj.getFullYear() - 1;

    const ageMnths = (today.getMonth() - selectedDateObj.getMonth() + 12) % 12;

    const ageDays =
        today.getDate() >= selectedDateObj.getDate()
            ? today.getDate() - selectedDateObj.getDate()
            : new Date(today.getFullYear(), today.getMonth(), 0).getDate() -
              selectedDateObj.getDate() +
              today.getDate();

    // console.log(`${ageYrs} Years, ${ageMnths} Months and ${ageDays} Days Old`);

    return (
        <div className="result-container">
            <p>
                <span>{ageYrs}</span> years
            </p>
            <p>
                <span>{ageMnths}</span> months
            </p>
            <p>
                <span>{ageDays}</span> days
            </p>
        </div>
    );
};

export default Result;

import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";
import { useState } from "react";
import Attribution from "./components/Attribution";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <main>
            <div className="container">
                <Form handleDateChange={handleDateChange} />
                <Result selectedDate={selectedDate} />
            </div>
            <Attribution />
        </main>
    );
};

export default App;

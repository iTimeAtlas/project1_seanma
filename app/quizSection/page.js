"use client";

import { fromJSON } from "postcss";
import { useEffect, useState } from "react";

/*
SELF NOTE SWITCH TO SELECT, DO NOT USE STUPID RADIO BUTTONS
*/

export default function QuizPage() {

     // START OF: Styling
     let optionStyling = "text-black";
     let selectStyling = "text-black";
     let questionRowStyling = "py-3 pl-2 bg-slate-500";
     // END OF: Styling

        // START OF: useState for q1-5Answers
    const [q1Answer, setQ1] = useState("");
    const [q2Answer, setQ2] = useState("");
    const [q3Answer, setQ3] = useState("");
    const [q4Answer, setQ4] = useState("");
    const [q5Answer, setQ5] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();

            let totalPoints = 0;
            
            if (q1Answer == "27") {
                totalPoints += 1;
            }
            if (q2Answer == "711") {
                totalPoints += 1;
            }
            if (q3Answer == "2") {
                totalPoints += 1;
            }
            if (q4Answer == "69") {
                totalPoints += 1;
            }
            if (q5Answer == "101") {
                totalPoints += 1;
            }

            alert(totalPoints);
            
        }

    return(
        <div>
            <header>
                <h1 className="text-xl">
                    QUIZ TIME!
                </h1>
            </header>
            <form>
                <div className={questionRowStyling}>
                    <p>"Bigger Number: Square Root of 625 or 3^3"</p>
                    <select className={selectStyling} onChange={(event) => setQ1(event.target.value)} value={q1Answer}>
                        <option className={optionStyling} value="625">625</option>
                        <option className={optionStyling} value="27">27</option>
                        <option className={optionStyling} value="25">25</option>
                        <option className={optionStyling} value="69">69</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>((5^2 * 9) * 2) + ((80 * 4) - 59)</p>
                    <select className={selectStyling} onChange={(event) => setQ2(event.target.value)} value={q2Answer}>
                        <option className={optionStyling} value="711">711</option>
                        <option className={optionStyling} value="321">321</option>
                        <option className={optionStyling} value="25">25</option>
                        <option className={optionStyling} value="812">812</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>How many FLAT faces does a cylinder have?</p>
                    <select className={selectStyling} onChange={(event) => setQ3(event.target.value)} value={q3Answer}>
                        <option className={optionStyling} value="3">3</option>
                        <option className={optionStyling} value="1">1</option>
                        <option className={optionStyling} value="0">0</option>
                        <option className={optionStyling} value="2">2</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>Smaller Number: Square Root of 4,761 or 36 * 3</p>
                    <select className={selectStyling} onChange={(event) => setQ4(event.target.value)} value={q4Answer}>
                        <option className={optionStyling} value="108">108</option>
                        <option className={optionStyling} value="69">69</option>
                        <option className={optionStyling} value="4761">4761</option>
                        <option className={optionStyling} value="36">36</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>9060 /  60 - 2500 / 50</p>
                    <select className={selectStyling} onChange={(event) => setQ5(event.target.value)} value={q5Answer}>
                        <option className={optionStyling} value="420">420</option>
                        <option className={optionStyling} value="302">302</option>
                        <option className={optionStyling} value="101">101</option>
                        <option className={optionStyling} value="106">106</option>
                    </select>
                </div>
                <div>
                    <button className="bg-cyan-700 px-3 py3" type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}
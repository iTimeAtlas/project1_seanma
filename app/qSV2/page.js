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

    function rngAnswer(reqNum) {
        let rngNum = Math.floor(Math.random() * 4);

        switch(rngNum) {
            case 0:
                return reqNum + 1;
                
            case 1:
                return reqNum * 2;

            case 2:
                return reqNum - 1;

            case 3:
                return reqNum + 100;

            case 4:
                let tempNum = Math.floor(Math.random() * 1000);
                if (tempNum == reqNum) {
                    tempNum += 1;
                    return tempNum;
                }

                return tempNum;
                
        }
    }

    // START OF: rng for quiz
    const randomNum1 = Math.floor(Math.random() * 100);
    const randomNum2 = Math.floor(Math.random() * 100);
    const randomNum3 = Math.floor(Math.random() * 100);
    const randomNum4 = Math.floor(Math.random() * 100);
    
    // END OF: rng for quiz


    // START OF: useState for q1-5Answers
    const [q1Answer, setQ1] = useState("");
    const [q2Answer, setQ2] = useState("");
    const [q3Answer, setQ3] = useState("");
    const [q4Answer, setQ4] = useState("");
    const [q5Answer, setQ5] = useState("");

    // END OF: useState for q1-5Answers


    // START OF: INIT QUIZ
    const mathQuestions = [
        "2^0 + 2^1 + 2^2", 
        "36 / 6",
        "((100 - 100) * 420) + 69",
        "200^2",
        "(1 + 2) * (3 + 4)",
        "1 + 2 * 3 + 4",
        "((2 / 1) + 28) / (132 - 127)",
        randomNum1.toString() + " + " + randomNum2.toString(),
        randomNum3.toString() + " - " + randomNum4.toString(),
        "90 * 4",
        "Bigger Number: Square Root of 625 or 3^3",
        "Smaller Number: Square Root of 40,000 or 1999",
        "(270 + 108) / 3^2",
        "15 * 10 * 2 + 10",
        "40000 / 100 + 4",
        "Bigger Number: Square Root of 176,400 or 3,636 / 9",
        "Smaller Number: Square Root of 4,761 or 36 * 3",
        "((5^2 * 9) * 2) + ((80 * 4) - 59)",
        "9060 /  60 - 2500 / 50",
        "5^2",
        "Which is not the same: 9^3, 2187 / 3, 81 * 9, 12^2 * 3",
        "What degrees to make a square angle?",
        "How many sides does a heptagon have?",
        "What is total degrees does an equilateral triangle add up to?",
        "How many faces does a cube have?",
        "How many FLAT faces does a cylinder have?"
    ];

    const mathAnswers = [
        7,
        6,
        69,
        40000,
        21,
        11,
        6,
        randomNum1 + randomNum2,
        randomNum3 - randomNum4,
        360,
        27,
        200,
        42,
        310,
        404,
        420,
        69,
        711,
        101,
        25,
        432,
        90,
        7,
        180,
        6,
        2
    ];
    // END OF: INIT QUIZ



    // START OF: mathQList INIT
    let tempMQList = [];
    let atQuestions = [];

        for (let a = 0; 5 > a; a++) {
            
            let tempInt = Math.floor(Math.random() * 24);
            
            tempMQList.push(mathAnswers[tempInt]);
            
            atQuestions.push(tempInt);


            // START - TEST SECTION
            /*
            console.log("This is attempt: " + a);
            console.log("tempInt");
            console.log(tempInt);
            console.log("tempMQList");
            console.log(tempMQList[a]);
            console.log("atQuestions");
            console.log(atQuestions[a]);
            */

            // END - TEST SECTION

        }

        //console.dir(tempMQList);
        // FILL mathQList BELOW

        // END OF: mathQList INIT

        // START OF: fill fullQList
        let holderFQList = [];

        for (let a = 0; atQuestions.length > a; a++) {
            // GENERATOR new num between 0-3
            let answerOn = Math.floor(Math.random() * 3);
            let tempInt = atQuestions[a];

            // START - Testing
            /*
            console.log("atQuestions " + tempInt);
            console.log("Attempt" + a + " Is " + answerOn);
            console.log(atQuestions[a]);

            console.log(mathQuestions[atQuestions[a]]);
            console.log(mathAnswers[atQuestions[a]]);

            if (mathAnswers.length == mathQuestions.length){
                console.log(true);
            }
            */
            // END - Testing

            for (let b = 0; 3 > b; b++) {
                if (b == answerOn) {
                    holderFQList.push(tempInt);
                }
                holderFQList.push(rngAnswer(tempInt));
            }
        }

        //console.dir(holderFQList);
        // END OF: fill fullQList

        // START OF: TEST FUNCTION
        function testTossArray(holderFQList){
            return holderFQList;
        }
        // END OF : TEST FUNCTION


        // START OF: useStates
        const [mathQList, setMathQList] = useState([]);
        const [fullQList, setFullQList] = useState([
            holderFQList[0],
            holderFQList[1],
            holderFQList[2],
            holderFQList[3],
            holderFQList[4],
            holderFQList[5],
            holderFQList[6],
            holderFQList[7],
            holderFQList[8],
            holderFQList[9],
            holderFQList[10],
            holderFQList[11],
            holderFQList[12],
            holderFQList[13],
            holderFQList[14],
            holderFQList[15],
            holderFQList[16],
            holderFQList[17],
            holderFQList[18],
            holderFQList[19],
        ]);
        // END OF: useStates


        //useEffect(() => {setFullQList(holderFQList)}, []);

        console.log(atQuestions[0]);
        console.dir(atQuestions);
        console.dir(holderFQList);

        const handleSubmit = (event) => {
            event.preventDefault();
            
            let totalPoints = 0;

            if (q1Answer == atQuestions[0].toString()) {
                totalPoints += 1;
            }
            if (q2Answer == atQuestions[1].toString()) {
                totalPoints += 1;
            }
            if (q3Answer == atQuestions[2].toString()) {
                totalPoints += 1;
            }
            if (q4Answer == atQuestions[3].toString()) {
                totalPoints += 1;
            }
            if (q5Answer == atQuestions[4].toString()) {
                totalPoints += 1;
            }

            setQ1("");
            setQ2("");
            setQ3("");
            setQ4("");
            setQ5("");

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
                    <p>{mathQuestions[atQuestions[0]]}</p>
                    <select className={selectStyling} onChange={(event) => setQ1(event.target.value)} value={q1Answer}>
                        <option className={optionStyling} value={holderFQList[0]}>{holderFQList[0]}</option>
                        <option className={optionStyling} value={holderFQList[1]}>{holderFQList[1]}</option>
                        <option className={optionStyling} value={holderFQList[2]}>{holderFQList[2]}</option>
                        <option className={optionStyling} value={holderFQList[3]}>{holderFQList[3]}</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>{mathQuestions[atQuestions[1]]}</p>
                    <select className={selectStyling} onChange={(event) => setQ2(event.target.value)} value={q2Answer}>
                        <option className={optionStyling} value={holderFQList[4]}>{holderFQList[4]}</option>
                        <option className={optionStyling} value={holderFQList[5]}>{holderFQList[5]}</option>
                        <option className={optionStyling} value={holderFQList[6]}>{holderFQList[6]}</option>
                        <option className={optionStyling} value={holderFQList[7]}>{holderFQList[7]}</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>{mathQuestions[atQuestions[2]]}</p>
                    <select className={selectStyling} onChange={(event) => setQ3(event.target.value)} value={q3Answer}>
                        <option className={optionStyling} value={holderFQList[8]}>{holderFQList[8]}</option>
                        <option className={optionStyling} value={holderFQList[9]}>{holderFQList[9]}</option>
                        <option className={optionStyling} value={holderFQList[10]}>{holderFQList[10]}</option>
                        <option className={optionStyling} value={holderFQList[11]}>{holderFQList[11]}</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>{mathQuestions[atQuestions[3]]}</p>
                    <select className={selectStyling} onChange={(event) => setQ4(event.target.value)} value={q4Answer}>
                        <option className={optionStyling} value={holderFQList[12]}>{holderFQList[12]}</option>
                        <option className={optionStyling} value={holderFQList[13]}>{holderFQList[13]}</option>
                        <option className={optionStyling} value={holderFQList[14]}>{holderFQList[14]}</option>
                        <option className={optionStyling} value={holderFQList[15]}>{holderFQList[15]}</option>
                    </select>
                </div>
                <div className={questionRowStyling}>
                    <p>{mathQuestions[atQuestions[4]]}</p>
                    <select className={selectStyling} onChange={(event) => setQ5(event.target.value)} value={q5Answer}>
                        <option className={optionStyling} value={holderFQList[16]}>{holderFQList[16]}</option>
                        <option className={optionStyling} value={holderFQList[17]}>{holderFQList[17]}</option>
                        <option className={optionStyling} value={holderFQList[18]}>{holderFQList[18]}</option>
                        <option className={optionStyling} value={holderFQList[19]}>{holderFQList[19]}</option>
                    </select>
                </div>
                <div>
                    <button className="bg-cyan-700 px-3 py3" type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}
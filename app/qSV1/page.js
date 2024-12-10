"use client";

import { fromJSON } from "postcss";
import { useState } from "react";

export default function QSV1() {

    // START of mathQList INIT
    //let tempInt = 0;
    let tempMQList = [];
    let atQuestions = [];

        for (let a = 0; 5 > a; a++) {
            let tempInt = Math.floor(Math.random() * 24);
            console.log(tempInt);
            tempMQList.push(mathAnswers[tempInt]);
            atQuestions.push(tempInt);
        }

        let holderNum1 = 0;
        let holderNum2 = 0;

        /*
        for (let a = 0; tempMQList.length > a; a++ ) {
            holderNum1 = tempMQList[a];


            if (!a == tempMQList.length - 1) {
                for (let b = a - 1; tempMQList.length > b; b++) {
                    holderNum2 = tempMQList[b];

                    if (holderNum1 == holderNum2) {
                        tempMQList[b] = Math.floor(Math.random() * 25);
                    }
                }
            }
        }
            */

        
    // END OF mathQList INIT



    // START OF: Scramble Section List V1
    let baseScramble = [];
    
    // WRONG
    /*
    for (let a = 0; 5 > a; a++) {
        let rightAnswerSlot = Math.floor(Math.random() * 3);
        let curAnswer = tempMQList[a];
        
        for (let b = 0; 3 > b; b++) {
            if (rightAnswerSlot == b) {
                baseScramble.push(curAnswer);
            }

            baseScramble.push(rngAnswer(curAnswer));

        }

    }
    */
    // END OF: Scramble Section List V1


    // START OF: Scramble Section List V2
    let rightAnswerSlot = Math.floor(Math.random() * 3);
    for (let a = 0; 3 > a; a++) {
        console.dir(atQuestions[a]);
        if (a == rightAnswerSlot) {
            baseScramble.push(mathAnswers[atQuestions[a]]);
        }

        baseScramble.push(rngAnswer(mathAnswers[atQuestions[a]]));
    }

    console.dir(baseScramble);
    // END OF: Scramble Section List V2
    


    // START OF: Fill section
    const [mathQList, setMathQList] = useState(tempMQList);
    const [fullQList, setFullQList] = useState(baseScramble);
    // END OF: FIll section


    // START OF: CLEAR IT OUT SECTION

    // END OF: CLEAR IT OUT SECTION


    // START OF: handleResetQuiz
    const handleResetQuiz = (event) => {
        event.preventDefault();

        let tempInt = 0;
    let tempMQList = [];

        for (let a = 0; 5 > a; a++) {
            tempInt = Math.floor(Math.random() * 25);
            tempMQList.push(tempInt);
        }


        let holderNum1 = 0;
        let holderNum2 = 0;

        for (let a = 0; tempMQList.length > a; a++ ) {
            holderNum1 = tempMQList[a];


            if (!a == tempMQList.length - 1) {
                for (let b = a - 1; tempMQList.length > b; b++) {
                    holderNum2 = tempMQList[b];

                    if (holderNum1 == holderNum2) {
                        tempMQList[b] = Math.floor(Math.random() * 25);
                    }
                }
            }
        }


        let baseScramble = [];
    

    for (let a = 0; 4 > a; a++) {
        let rightAnswerSlot = Math.floor(Math.random() * 3);
        let curAnswer = tempMQList[a];

        for (let b = 0; 3 > b; b++) {
            if (rightAnswerSlot == b) {
                baseScramble.push(curAnswer);
            }

            baseScramble.push(rngAnswer(curAnswer));

        }

    }

    setMathQList(tempMQList);
    setFullQList(baseScramble);



    }
    // END OF: handleResetQuiz





    // START OF: checking portion

    /*
    console.dir(tempMQList);
    console.dir(baseScramble);
    */

    console.dir(mathQList);
    console.dir(fullQList);
    // END OF: checking portion

    return(
        <div>

        </div>
    );
}
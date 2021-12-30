import "./EightBall.css";
import { useState } from "react";

const EightBall = (props) => {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black",
    });

    const [count, setCount] = useState(0);

    const pickAnswer = () => {
        setCount(count + 1);
        const randIdx = Math.floor(Math.random() * props.answers.length);
        return props.answers[randIdx];
    };
    const restart = () => {
        setAnswer({
            msg: "Think of a Question",
            color: "black",
        });
        setCount(0);
    };
    return (
        <div>
            <h3> Magic Eight Ball </h3>
            <div
                className="EightBall"
                style={{ background: answer.color }}
                onClick={() => setAnswer(pickAnswer())}
            >
                <p>{answer.msg}</p>
            </div>
            <p>Count: {count}</p>
            <button className="EightBall-restart" onClick={restart}>
                Restart
            </button>
        </div>
    );
};

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ],
};
export default EightBall;

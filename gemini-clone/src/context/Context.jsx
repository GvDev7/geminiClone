import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () { 
            setResultData(prev=>prev+nextWord);
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPrompt(prompt);
        } else {
            setPreviousPrompts(prev=>[...prev,input]);
            setRecentPrompt(input);
            response = await runChat(input);
        }
        let responseArr = response.split("**");
        let newRes="";
        for(let i = 0; i < responseArr.length; i++) {
            if (i === 0 || i%2 !== 1) {
                newRes += responseArr[i];
            } else {
                newRes += "<b>"+ responseArr[i]+"</b>";
            }
        }
        let newRes2 = newRes.split("*").join("<br/>")
        let newResArr = newRes2.split(" ");
        for(let i = 0; i < newResArr.length; i++) {
            const nextWrd = newResArr[i];
            delayPara(i, nextWrd+" ");
        }
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        resultData,
        input,
        setInput,
        setLoading,
        setResultData,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
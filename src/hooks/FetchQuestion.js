import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

import * as Action from '../redux/question_reducer'

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ Loading: false, apiData: [], serverError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        // async function fetch backend data
        (async () => {
            try {
                const [ {questions, answers}] = await getServerData(`http://localhost:7000/questions`, (data)=> data)

                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }))
                    setGetData(prev => ({ ...prev, apiData: { question: questions, answers } }))

                    // dispatch an action
                    dispatch(Action.startExamAction({ question: questions, answers }))
                } else {
                    throw new Error("No question available")
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }))
                setGetData(prev => ({ ...prev, serverError: error }))
            }
        })()
    }, [dispatch])

    return [getData, setGetData]
}

// MoveAction Dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error);
    }
}

// PrevAction Dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error);
    }
}
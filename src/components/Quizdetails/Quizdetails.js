import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizdetails = () => {
    const quiz = useLoaderData().data;
    // console.log(quiz.questions);
    return (
        <div>
           <Questions key={quiz.id} quiz={quiz}></Questions>
        </div>
    );
};

export default Quizdetails;
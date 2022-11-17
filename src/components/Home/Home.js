import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData().data;
    console.log(quizzes);
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:ml-10 mx-auto px-4 gap-4 mb-20'>
                {
                    quizzes.map(quiz=><Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;
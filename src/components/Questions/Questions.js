import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const notify = () => toast("Yes! The answer is correct");
const notify2 = () => toast("Oh! Its wrong answer");


const Questions = ({ quiz }) => {

    // eyeClick Handle Event 
    const notifyAnswer0 = () => toast(quiz.questions[0].correctAnswer)
    const notifyAnswer1 = () => toast(quiz.questions[1].correctAnswer)
    const notifyAnswer2 = () => toast(quiz.questions[2].correctAnswer)
    const notifyAnswer3 = () => toast(quiz.questions[3].correctAnswer)
    const notifyAnswer4 = () => toast(quiz.questions[4].correctAnswer)
    const notifyAnswer5 = () => toast(quiz.questions[5].correctAnswer)
    const notifyAnswer6 = () => toast(quiz.questions[6].correctAnswer)
    const notifyAnswer7 = () => toast(quiz.questions[7].correctAnswer)
    const notifyAnswer8 = () => toast(quiz?.questions[8]?.correctAnswer)
    const notifyAnswer9 = () => toast(quiz?.questions[9]?.correctAnswer)
    const notifyAnswer10 = () => toast(quiz?.questions[10]?.correctAnswer)

    const eyeClick0 = () => {
        return notifyAnswer0();
        
    }
    const eyeClick1 = () => {
        return notifyAnswer1();
        
    }
    const eyeClick2 = () => {
        return notifyAnswer2();
        
    }
    const eyeClick3 = () => {
        return notifyAnswer3();
        
    }
    const eyeClick4 = () => {
        return notifyAnswer4();
        
    }
    const eyeClick5 = () => {
        return notifyAnswer5();
        
    }
    const eyeClick6 = () => {
        return notifyAnswer6();
        
    }
    const eyeClick7 = () => {
        return notifyAnswer7();
        
    }
    const eyeClick8 = () => {
        return notifyAnswer8();
        
    }
    const eyeClick9 = () => {
        return notifyAnswer9();
        
    }
    const eyeClick10 = () => {
        return notifyAnswer10();
        
    }

    console.log(quiz.questions)

    // Mutiple Choice Question Button Handler
    const handleClick0 = (event) => {
        if (event.target.innerText === quiz.questions[0].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick1 = (event) => {
        if (event.target.innerText === quiz.questions[1].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick2 = (event) => {
        if (event.target.innerText === quiz.questions[2].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick3 = (event) => {
        if (event.target.innerText === quiz.questions[3].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick4 = (event) => {
        if (event.target.innerText === quiz.questions[4].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick5 = (event) => {
        if (event.target.innerText === quiz.questions[5].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick6 = (event) => {
        if (event.target.innerText === quiz.questions[6].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick7 = (event) => {
        if (event.target.innerText === quiz.questions[7].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick8 = (event) => {
        if (event.target.innerText === quiz.questions[8].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick9 = (event) => {
        if (event.target.innerText === quiz.questions[9].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    const handleClick10 = (event) => {
        if (event.target.innerText === quiz.questions[10].correctAnswer) {
            return notify();
        } else {
            return notify2();
        }
    }
    
   
    
    return (
            
        <div>
            <div className='mb-5'>
                <h1 className='text-5xl mb-2'>{quiz.name} Quiz</h1>
                <h3 className='text-xl'>Total: {quiz.questions.length} Quiz</h3>
                <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-1 mt-5">
                    <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick0}><FontAwesomeIcon icon={faEye}/></button>
                    <div className="card-body">
                        <h2 className="card-title">{quiz.questions[0].question}</h2>
                        <div className='correctAnswer'>
                            {
                                quiz.questions[0].options.map(qz => {
                                    return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick0}>{qz}</div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick1}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[1].question}</h2>
                    <div>
                        {
                            quiz.questions[1].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick1}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick2}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[2].question}</h2>
                    <div>
                        {
                            quiz.questions[2].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick2}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick3}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[3].question}</h2>
                    <div>
                        {
                            quiz.questions[3].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick3}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick4}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[4].question}</h2>
                    <div>
                        {
                            quiz.questions[4].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick4}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick5}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[5].question}</h2>
                    <div>
                        {
                            quiz.questions[5].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick5}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick6}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[6].question}</h2>
                    <div>
                        {
                            quiz.questions[6].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick6}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick7}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz.questions[7].question}</h2>
                    <div>
                        {
                            quiz.questions[7].options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick7}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick8}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz?.questions[8]?.question}</h2>
                    <div>
                        {
                            quiz?.questions[8]?.options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick8}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick9}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz?.questions[9]?.question}</h2>
                    <div>
                        {
                            quiz?.questions[9]?.options.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick9}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <div className="card w-1/2 bg-base-300 shadow-lg text-center mx-auto mb-5">
                <button className='text-xl pt-4 md:ml-96 mx-auto' onClick={eyeClick10}><FontAwesomeIcon icon={faEye} /></button>
                <div className="card-body">
                    <h2 className="card-title">{quiz?.questions[10]?.question}</h2>
                    <div>
                        {
                            quiz?.questions[10]?.options?.map(qz => {
                                return <div className='border-2 border-orange-300 rounded-xl bg-slate-500 p-2 cursor-pointer text-white mb-1' onClick={handleClick10}>{qz}</div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
                
            <div>
                <button onClick={notify}></button>
                <ToastContainer autoClose={2000} />
            </div>
            </div>
             
        );
   
};

export default Questions;
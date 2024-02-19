import React, { useEffect, useState } from 'react';

const classes = 'w-[200px] h-[200px] border-2	border-[var(--main-color)] border-dashed rounded-lg	flex items-center justify-center flex-col gap-4 '

interface Files {
    0: null | { isLoaded: boolean, data: any },
    1: null | { isLoaded: boolean, data: any },
    2: null | { isLoaded: boolean, data: any },
    3: null | { isLoaded: boolean, data: any },
}

export default function Upload() {
    const [files, setFiles] = useState<Files>({ 1: null, 2: null, 3: null, 0: null })
    const [drop, setDrop] = useState(false);
    const [form, setForm] = useState({
        haveParkinson: false,
        deviceType: null
    })

    const onDragLeave = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    };

    const onDragOver = (e: React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        if (files[index]?.isLoaded) return;
        const droppedFile = e.dataTransfer.files[0];
        const newFiles = files
        newFiles[index] = { isLoaded: true, data: droppedFile }
        setFiles({ ...newFiles })
    };

    const deleteFile = (index: number) => {
        if (!files[index]) return
        const newFiles = files
        newFiles[index] = null
        setFiles({ ...newFiles })
    }

    return (
        <form className='grid gap-4 w-fit'>
            <div className='grid-cols-2	grid gap-4'>
                {Array(4).fill(0).map((el, index) => {
                    return (
                        <div
                            className={files[index] ? classes + ' border-[var(--success-color)]' : classes + ' opacity-50'}
                            onClick={() => deleteFile(index)}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                        >
                            {
                                files[index] ?
                                    <>
                                        <svg width="36px" height="36px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5 13L9 17L19 7" stroke="var(--success-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <p>Файл загружен</p>
                                    </> :
                                    <>
                                        <svg width="36px" height="36px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20L18 20" stroke="var(--main-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5" stroke="var(--main-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <p>Загрузите файл</p>
                                    </>
                            }
                        </div>
                    )
                })}
            </div>
            <div className='flex gap-4'>
                <div className='input-container'>
                    <input type='radio' id='Encelafan' name='deviceType' />
                    <label htmlFor="Encelafan">Энцелафан</label>
                </div>
                <div className='input-container'>
                    <input type='radio' id='Neurosoft' name='deviceType' />
                    <label htmlFor="Neurosoft">Нейрософт</label>
                </div>
            </div>
            <div className='input-container'>
                <input type='checkbox' id='haveParkinson' />
                <label htmlFor="haveParkinson">Есть клинический диагноз ‘Болезнь Паркинсона’</label>
            </div>
            <button className='button'>Создать</button>
        </form >
    )
}
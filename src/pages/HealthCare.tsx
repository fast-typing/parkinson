import { Paper } from '@mui/material';
import React from 'react';

export default function HealthCare() {
    return (
        <div className='grid gap-32'>
            <div>
                <h3>Методология моторной пробы</h3>
                <Paper className='mb-4'>
                    <div>
                        <p>
                            Поддерживаем ЭЭГ-аппараты производителей:
                            <br />
                            Энцелафан
                            Нейрософт
                            <br />
                            ЭЭГ: 21 отведение, схема 10-20%
                        </p>
                        <hr />
                        <ul className='mb-4'>
                            Предобработка:
                            <li className='ml-4 pl-4'>
                                удаление окуло- и миографических артефактов
                            </li>
                            <li className='ml-4 pl-4'>
                                частотная фильтрация в диапазоне от 0,5 до 45 Гц
                            </li>
                            <li className='ml-4 pl-4'>
                                Когерентный анализ в 7 частотных диапазонах
                            </li>
                        </ul>
                        <table>
                            <thead>
                                <tr>
                                    <th>Δ</th>
                                    <th>θ</th>
                                    <th>α1</th>
                                    <th>α2</th>
                                    <th>α3</th>
                                    <th>β1</th>
                                    <th>β2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        0,5-4 Гц.
                                    </th>
                                    <th>
                                        4-8 Гц.

                                    </th>
                                    <th>
                                        8-9,5 Гц.
                                    </th>
                                    <th>
                                        9,5-11 Гц.
                                    </th>
                                    <th>
                                        11-13 Гц.
                                    </th>
                                    <th>
                                        13-24 Гц.
                                    </th>
                                    <th>
                                        24-34 Гц.
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Paper>
                <img src="imgs/methodology.png" alt="" />
            </div>
            <div>
                <h3>Сценарий исследования</h3>
                <img src="imgs/usecase.png" alt="" />
            </div>
            <div>
                <h3>Использованные данные</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Параметры/Участники	</th>
                            <th>С подтвержденным диагнозом	</th>
                            <th>Контроль</th>
                            <th>Суммарно</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                Количество
                            </th>
                            <th>
                                35
                            </th>
                            <th>
                                64
                            </th>
                            <th>
                                99
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Точность
                            </th>
                            <th>
                                78%
                            </th>
                            <th>
                                92%
                            </th>
                            <th>
                                85%
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
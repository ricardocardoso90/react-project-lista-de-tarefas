import './App.css';
import { ChangeEvent, useState } from 'react';
import { usePeopleList } from './reducers/PeopleList';

function App() {
    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleAddButton = () => {
        if (nameInput) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameInput
                }
            })
        };
        setNameInput('');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    };

    const handleDelButton = (id: string) => {
        dispatch({
            type: 'DEL',
            payload: { id: id }
        })
    };

    const handleOrderButton = () => {
        dispatch({
            type: 'ORDER',
        });
    };

    return (
        <div className='box'>
            <div>
                <div className='box-container'>
                    <h2>Adicione sua lista de Tarefas:</h2>
                    <div>
                        <input type="text" value={nameInput} onChange={handleInputChange} /> <br />

                        <button className='handle-button' onClick={handleAddButton}>Adicionar</button>
                        <button className='handle-button' onClick={handleOrderButton}>Ordenar</button>
                    </div>
                    <h2>Lista de Pessoas:</h2>
                    <ul>
                        {list.map((item, index) => {
                            return (
                                <li key={index}>{item.name}
                                    <button onClick={() => handleDelButton(item.id)}>Deletar</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default App;
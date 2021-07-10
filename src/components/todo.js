import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const Todo = () => {
    const [search, setSearch] = useState();
    const [input, setinput] = useState([]);
    function addItem() {
        if (!search) { }
        else {
            setinput([...input, search]);
            setSearch("");
        }


    }
    function deleteItem(id) {
        const upadatedList = input.filter((val, ind) => {
            return (
                ind !== id
            )
        })
        setinput(upadatedList)

    }
    function editItem(id) {
        const editableItem = input.filter((val, ind) => {
            return (
                ind === id
            )
        });
        const upadatedList = input.filter((val, ind) => {
            return (
                ind !== id
            )
        });
        setinput(upadatedList);

        setSearch(...editableItem)
    };
    function removeAll() {
        setinput([])
        
    }
    return (
        <>
            <div className="maindiv">
                
                <div className="child_div">
                    <div className="additem">
                        <TextField id="standard-basic" label="Add Items"
                            onChange={e => setSearch(e.target.value)}
                            value={search} />
                        <Button variant="contained" color="primary"
                            onClick={addItem}>
                            <AddIcon></AddIcon>
                        </Button>
                    </div>
                    <div className="showItem"  >
                        {
                            input.map((val, ind) => {
                                return (
                                    <div className="eachItems" key={ind}>
                                        <h3>{val}</h3>
                                        <Button variant="contained" color="secondary"
                                            onClick={() => deleteItem(ind)}>
                                            <DeleteIcon></DeleteIcon>
                                        </Button>
                                        <Button variant="contained" color="primary"
                                            onClick={() => editItem(ind)}>
                                            Edit
                                        </Button>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <Button variant="contained" color="default"
                        onClick={removeAll}
                        className="rmbtn"
                        mouse>
                        Remove All
                    </Button>


                </div>

            </div>
        </>
    )
}

export default Todo

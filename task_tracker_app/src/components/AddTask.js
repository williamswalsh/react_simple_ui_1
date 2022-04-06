import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    // not calling onAdd directly
    const onSubmit = (e) => {
        // this is done so that form isn't submitted to page
        e.preventDefault();

        if(!text) {
            alert('Please add a task')
        }

        // Here he is passing back an object with 3 properties
        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    value={text} 
                    placeholder='Add Task'
                    onChange={(e) => setText(e.target.value)}  />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    value={day}
                    placeholder='Add Day & Times'
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
            </div>
            <input type="submit" value='Save Task' className="btn btn-block" />
        </form>
    )
}

export default AddTask
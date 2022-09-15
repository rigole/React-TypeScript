import React from "react";

const EventComponent: React.FC = () => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return (
        <div>
            <input onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>
                Drag Me!
            </div>
        </div>
    )
}

export default EventComponent
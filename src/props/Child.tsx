import React from "react";

interface ChildProps {
    color: string;
    children: string;
    onClick: () => void;
}


export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            Hi there!
            <button onClick={onClick}>Click me</button>
        </div>
    )
}


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click me</button>
        </div>
    )
}
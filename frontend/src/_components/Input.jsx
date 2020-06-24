import React from 'react';
import styled from 'styled-components';
import './Input.css';


let Input = styled.input`
    border-radius: 5px;
    border: 1px solid #ebe9e6;
    padding: 10px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

let Textarea = styled.textarea`
    border-radius: 5px;
    border: 1px solid #ebe9e6;
    padding: 10px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: 100%;
`;

export default props => {
    if(props.type == 'textarea') {
        return (
            <div>
                <label>
                    { props.label }
                </label>
                <Textarea
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}
                    rows={props.rows}
                    padding={props.padding}
                    margin={props.margin}
                    placeholder={props.placeholder}
                    required={props.required}
                ></Textarea>
            </div>
        )
    }
    return (
        <div>
            <label>
                { props.label }
            </label>
            <Input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                padding={props.padding}
                margin={props.margin}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    )
}
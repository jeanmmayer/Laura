import React from 'react'
import Button from '../common/button'

export default _ => {
    return (
        <div>
            <Button
                primary
                upper
                bold
                margin="10px 0"
                type="button"
                text="Entrar"
                onClick=""
            />
            <Button
                primaryNegative
                upper
                bold
                margin="10px 0"
                type="button"
                text="Esqueceu a senha?"
                onClick=""
            />
        </div>
    )
}
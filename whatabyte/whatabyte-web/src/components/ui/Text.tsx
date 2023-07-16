import React from "react";
import '../../assets/scss/components/ui/text.scss'

type TextOwnProps<E extends React.ElementType> = {
    size? : 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'error'
    align?: 'left' | 'right' | 'center'
    children: React.ReactNode
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

const Text =<E extends React.ElementType = 'div'> ({ size, color, children, align, as }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`text-${size}-${color} text-${align}`} >{children}</Component>
    ) 
}

export default Text;
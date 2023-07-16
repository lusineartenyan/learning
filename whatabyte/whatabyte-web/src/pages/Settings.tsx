import React, { ChangeEvent, useState } from 'react'
import InputText from "../components/form/InputText";
import Text from "../components/ui/Text";
import Button from "../components/form/Button";


const Settings = () => {
    const [name, setName] = useState('')

    const handleNameChange = (name: string, value: string) => {
        setName(value)
    }

    return (
        <div className='flex-box wrapper'>
            <InputText
                type="text"
                label="Name"
                value={name}
                name="name"
                onChange={handleNameChange}
                placeholder="Please enter your name"
            />
            <Text size='lg'>Enable Authentication Features</Text>
            <div className='btn-group-vertical'>
                <Button onClick={() => alert('Save')}>Save</Button>
                <Button onClick={()=> alert('Clear')} >Clear</Button>
            </div>
        </div>  
    )
}

export default Settings;
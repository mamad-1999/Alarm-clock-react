import { useState } from 'react'

function useSelect(initialValue) {
    const [value, setValue] = useState(initialValue)

    const data = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value, data]
}

export default useSelect
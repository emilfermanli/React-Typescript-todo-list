import React,{useState,useRef} from 'react'


interface TodoFormProps {
    onAdd(title:string): void
}


const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>("")
    const ref = useRef<HTMLInputElement>(null)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
        
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
        }
    }

    return (
        <div className="input-field">
            <input 
            onChange={handleChange}
            value={title}
            type="text" 
            id="title" 
            ref={ref}
            onKeyPress={handleKeyPress}
            />
            <label htmlFor="title"  className="active">
                 name
            </label>
        </div>
    )
}

export default TodoForm

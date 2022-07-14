import './InputBoxWithLabels.css'

interface IInputBoxWithLabelsProps {
    label: string,
    id: string,
    inputPlaceholder: string
}

export const InputBoxWithLabels = (props: IInputBoxWithLabelsProps) => {
    return (
        <div className="field col-12">
            <label className="field-label" htmlFor={props.id}>{props.label}</label>
            <input type="text" className="field-input-text w-100" name={props.id} id={props.id} placeholder={props.inputPlaceholder} />
        </div>
    )
}

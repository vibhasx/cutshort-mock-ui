import './InputBoxWithLabels.css'

interface IInputBoxWithLabelsProps {
    label: string,
    id: string,
    inputPlaceholder: string,
    isOptional?: boolean,
    insetLabel?: string,
}

export const InsetLabelInputBoxWithLabel = (props: IInputBoxWithLabelsProps) => {
    const optionalLabel = '(Optional)'
    return (
        <div className="field col-12">
            <label className="field-label" htmlFor={props.id}>{props.label}{props.isOptional && <span className='field-label-span'>&nbsp;{optionalLabel}</span>}</label>
            <input type="text" disabled className="field-inset-label col-5" placeholder={props.insetLabel} />
            <input type="text" className="field-input-text-with-inset col-7" name={props.id} id={props.id} placeholder={props.inputPlaceholder} />
        </div>
    )
}

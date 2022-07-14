import './FieldButton.css'

interface IFieldButtonProps {
    title: string,
    onClick: () => void
}

export const FieldButton = (props: IFieldButtonProps) => {
    return (<>
        <div className="col-12">
            <button type='submit' className='field-button' onClick={props.onClick}>{props.title}</button>
        </div>
    </>
    )
}

import { ReactNode } from 'react'
import { FieldButton } from './FieldButton'
import { Headings } from './Headings'

interface ICardFormProps {
    Headings: {
        Main: string,
        Sub: string
    }
    Button: {
        Title: string,
        onClick: () => void
    }
    children?: ReactNode,
}

export const CardForm = (props: ICardFormProps) => {
    return (
        <div className='col-12 mb-5'>
            <Headings main={props.Headings.Main} sub={props.Headings.Sub} />
            <div className="col-xl-8 col-12 m-auto">
                {props.children && <div className='row'>{props.children}</div>}
                <div className='row'>
                    <FieldButton title={props.Button.Title} onClick={props.Button.onClick} />
                </div>
            </div>
        </div>
    )
}

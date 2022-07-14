import { CardForm } from './common/CardForm'
import { ISetActiveNodeProps } from './common/interface'
import Content from '../Contents.json'
import { AiOutlineCheck } from "react-icons/ai";

export const FinalForm = (props: ISetActiveNodeProps) => {
    const { Headings, ButtonText } = Content.FinalForm
    return (
        <>
            <div className='text-center my-3'>
            <AiOutlineCheck size={60} className="icon"/>
            </div>
            <CardForm
                Headings={Headings}
                Button={{
                    Title: ButtonText,
                    onClick: () => { props.activateNextNode(null) }
                }} />
        </>
    )
}

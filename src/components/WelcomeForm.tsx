import { InputBoxWithLabels } from './common/InputBoxWithLabels'
import { ISetActiveNodeProps } from './common/interface'
import { CardForm } from './common/CardForm'
import Content from '../Contents.json'

export const WelcomeForm = (props: ISetActiveNodeProps) => {
    const { Headings, FormInputs, ButtonText } = Content.WelcomeForm
    return (
        <CardForm
            Headings={Headings}
            Button={{ Title: ButtonText, onClick: () => { props.activateNextNode(2) } }} >
            {
                FormInputs.map((data, index) =>
                (
                    <InputBoxWithLabels key={`form-field-${index}`} label={data.label} id={data.id} inputPlaceholder={data.placeholder} />
                ))
            }
        </CardForm >
    )
}

import { CardForm } from './common/CardForm'
import { InputBoxWithLabels } from './common/InputBoxWithLabels'
import { InsetLabelInputBoxWithLabel } from './common/InsetLabelInputBoxWithLabel'
import { ISetActiveNodeProps } from './common/interface'
import Content from '../Contents.json'

export const WorkspaceForm = (props: ISetActiveNodeProps) => {
    const { Headings, FormInputs, ButtonText } = Content.WorkspaceForm
    const formFirstInput = FormInputs[0]
    const formSecondInput = FormInputs[1]
    return (
        <CardForm
            Headings={Headings}
            Button={{ Title: ButtonText, onClick: () => { props.activateNextNode(3) } }} >
            <InputBoxWithLabels label={formFirstInput.label} id={formFirstInput.id} inputPlaceholder={formFirstInput.placeholder} />
            <InsetLabelInputBoxWithLabel label={formSecondInput.label} id={formSecondInput.id} inputPlaceholder={formSecondInput.placeholder} isOptional={formSecondInput.isOptional} insetLabel={formSecondInput.insetLabel} />
        </CardForm >
    )
}

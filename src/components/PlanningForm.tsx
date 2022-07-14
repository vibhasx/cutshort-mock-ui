import { CardForm } from './common/CardForm'
import { Card } from './common/Card'
import { ISetActiveNodeProps } from './common/interface'
import Content from '../Contents.json'

export const PlanningForm = (props: ISetActiveNodeProps) => {
    const { Headings, FormInputs, ButtonText } = Content.PlanningForm
    return (
        <CardForm
            Headings={Headings}
            Button={{ Title: ButtonText, onClick: () => { props.activateNextNode(4) } }} >
            <div className="row m-auto">
                {
                    FormInputs.map((data, index) =>
                        <Card key={`form-field-${index}`} isActive={data.isActive} heading={data.heading} id={data.id} icon={data.icon} subHeading={data.subHeading} />
                    )
                }
            </div>
        </CardForm >
    )
}

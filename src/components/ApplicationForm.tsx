import { ISetActiveNodeProps } from './common/interface';
import { FinalForm } from './FinalForm';
import { PlanningForm } from './PlanningForm';
import { WelcomeForm } from './WelcomeForm'
import { WorkspaceForm } from './WorkspaceForm';

interface IApplicationFormProps extends ISetActiveNodeProps {
  activeNode: number[],
}

export const ApplicationForm = (props: IApplicationFormProps) => {
  const lastActiveNode = props.activeNode[props.activeNode.length - 1]
  const getComponent = () => {
    switch (lastActiveNode) {
      case 1:
        return <WelcomeForm activateNextNode={props.activateNextNode} />
      case 2:
        return <WorkspaceForm activateNextNode={props.activateNextNode} />
      case 3:
        return <PlanningForm activateNextNode={props.activateNextNode} />
      case 4:
        return <FinalForm activateNextNode={props.activateNextNode} />
      default:
        return <WelcomeForm activateNextNode={props.activateNextNode} />
    }
  }
  return (
    <div className="row">
      {getComponent()}
    </div>
  )
}

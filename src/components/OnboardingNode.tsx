import { ISetActiveNodeProps } from './common/interface';
import './OnboardingNode.css'

interface IOnboardingNodeProps extends ISetActiveNodeProps {
    activeNode: number[],
    setCurrentActiveNode: (node: number) => void
}

export const OnboardingNode = (props: IOnboardingNodeProps) => {
    const numberOfSteps = [
        { text: 1, isActive: props.activeNode.find((value) => value === 1) },
        { text: 2, isActive: props.activeNode.find((value) => value === 2) },
        { text: 3, isActive: props.activeNode.find((value) => value === 3) },
        { text: 4, isActive: props.activeNode.find((value) => value === 4) },
    ];
    return (
        <div className='node-list my-5'>
            {numberOfSteps.map((value, index) => {
                const isActiveNode = value.isActive ? 'node-item active' : 'node-item'
                return <span className={isActiveNode} key={`node-${index}`} onClick={() => props.setCurrentActiveNode(index + 1)}>{value.text}</span>
            })}
        </div>
    )
}

import { FaUser, FaUsers } from "react-icons/fa";
import './Card.css'

interface ICardProps {
    id: string,
    icon: string,
    heading: string,
    subHeading: string,
    isActive: boolean
}

export const Card = (props: ICardProps) => {
    const cardClass = props.isActive ? 'active' : ''
    return (
        <div className="col-sm-6 card-column">
            <div className={`card mb-3 ${cardClass}`}>
                <div className="card-body">
                    <div className="mb-3">
                        {props.icon === "User" && <FaUser size={20} className={`user-icon ${cardClass}`} />}
                        {props.icon === "Users" && <FaUsers size={20} className={`user-icon ${cardClass}`} />}
                    </div>
                    <h5 className='card-title'>{props.heading}</h5>
                    <p className='card-text'>{props.subHeading}</p>
                </div>
            </div>
        </div>
    )
}

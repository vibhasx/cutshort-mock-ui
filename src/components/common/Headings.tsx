import './Headings.css'

interface IHeadingProps {
    main: string,
    sub: string,
}

export const Headings = (props: IHeadingProps) => {
    return (
        <div className='row text-center card-heading'>
            <h2>{props.main}</h2>
            <h6>{props.sub}</h6>
        </div>
    )
}

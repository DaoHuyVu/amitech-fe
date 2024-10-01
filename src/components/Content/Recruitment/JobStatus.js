import './recruitment.css'
const JobStatus = ({style,children}) => {
    return (
        <span className='job-status' style={style}>
            {children}
        </span>
    )
}
export default JobStatus
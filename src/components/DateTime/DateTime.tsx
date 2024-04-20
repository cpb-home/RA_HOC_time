export interface IDateTime {
  date?: string;
}

const DateTime = ({ date }: IDateTime) => {
  return (
    <p className="date">{date}</p>
  )
}

export default DateTime

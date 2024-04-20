import DateTimePretty from "../DateTimePretty/DateTimePretty";

export interface IVideo {
  url: string;
  date: string;
}

const Video = ({ url, date }: IVideo) => {
  return (
    <div className="video">
        <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <DateTimePretty date={date} />
    </div>
  )
}

export default Video

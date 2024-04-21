import DateTimePretty from "../DateTimePretty/DateTimePretty";
import DateTime from "../DateTime/DateTime";

export interface IVideo {
  url: string;
  date: string;
}

const Video = ({ url, date }: IVideo) => {
  return (
    <div className="video">
        <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <DateTime date={date} />
    </div>
  )
}

const updatedVideo = DateTimePretty(
  Video
);

export default updatedVideo


/*
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

*/
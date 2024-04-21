import Video from "../Video/Video";
import { IVideo } from "../Video/Video";

interface IVideoList {
  list: IVideo[]
}

const VideoList = ({ list }: IVideoList) => {
  return list.map((item, ind) => <Video key={ind} url={item.url} date={item.date} />);
}

export default VideoList

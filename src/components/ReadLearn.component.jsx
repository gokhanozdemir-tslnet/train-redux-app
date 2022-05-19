import { useDispatch, useSelector } from "react-redux";
import { setLearningContent } from "../store/learn.action";
import { getLearningContent } from "../store/learn.selector";

const ReadLearn = () => {
  const dispatch = useDispatch();
  const x = useSelector(getLearningContent);

  console.log("FFF");
  console.log(x);
  console.log("FFF");
  return (
    <div>
      <div>use effect</div>
      <div>{x?.learn?.content}</div>
    </div>
  );
};

export default ReadLearn;

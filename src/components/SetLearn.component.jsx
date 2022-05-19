import { useDispatch, useSelector } from "react-redux";
import { setLearningContent } from "../store/learn.action";
import { getLearningContent } from "../store/learn.selector";

const SetLearn = () => {
  const dispatch = useDispatch();
  const x = useSelector(getLearningContent);
  const clickHandler = () => {
    const leanr = {
      content: "english",
      complete: 50,
    };

    dispatch(setLearningContent(leanr));

    console.log(x);
  };

  return (
    <div>
      <div></div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default SetLearn;

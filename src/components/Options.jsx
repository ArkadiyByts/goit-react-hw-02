

const Options = ({ onFeedback, reset, total }) => {
  
  return (
    <>
      <div>
        <button onClick={() => onFeedback("good")}>Good</button>
        <button onClick={() => onFeedback("neutral")}>Neutral</button>
        <button onClick={() => onFeedback("bad")}>Bad</button>
        {total > 0 && <button onClick={reset} >Reset</button>}
      </div>
    </>
  );
};

export default Options;

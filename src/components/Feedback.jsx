const Feedback = ({ feedback, total, positive }) => {

const { good, neutral, bad } = feedback;

  return (
    <>
      <div>
        <p>Good:<span>{good}</span></p>
        <p>Neutral:<span>{neutral}</span></p>
        <p>Bad:<span>{bad}</span></p>
        <p>Total:<span>{total}</span></p>
        <p>Positive:<span>{positive}%</span></p>
      </div>
    </>
  );
};

export default Feedback;

// const Feedback = ({ feedback, total }) => {
  
//   return (
//     <>
//       <div>
//         <p>Good:<span>{feedback.good}</span></p>
//         <p>Neutral:<span>{feedback.neutral}</span></p>
//         <p>Bad:<span>{feedback.bad}</span></p>
//         <p>Total:<span>{total}</span></p>
//         <p>Positive:<span></span></p>
//       </div>
//     </>
//   );
// };

// export default Feedback;
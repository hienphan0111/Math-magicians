import './Quote.scss';

const quotes = [
  {
    author: 'Deepak Chopra',
    quote: 'Mathematics expresses values that reflect the cosmos,including orderliness, balance, harmony, logic, and abstract beauty.',
  },
  {
    author: 'G.K. Chesterton',
    quote: 'The difference between the poet and the mathematician is that the poet tries to get his head into the heavens while the mathematician tries to get the heavens into his head.',
  },
  {
    author: 'Malcolm X, The Autobiography of Malcolm X',
    quote: 'I\'m sorry to say that the subject I most disliked was mathematics. I have thought about it. I think the reason was that mathematics leaves no room for argument. If you made a mistake, that was all there was to it.',
  },
  {
    author: 'Stephenie Meyer',
    quote: 'My first feeling was that there was no way to continue. Writing isn\'t like math;in math, two plus two always equals four no matter what your mood is like. With writing, the way you feel changes everything.',
  },
  {
    author: 'Roman Payne',
    quote: 'The ‘Muse’ is not an artistic mystery, but a mathematical equation. The gift are those ideas you think of as you drift to sleep. The giver is that one you think of when you first awake.',
  },
];

const Quote = () => {
  const num = Math.floor(Math.random() * quotes.length);
  const { author, quote } = quotes[num];

  return (
    <div className="quote-container">
      <p>
        &quot;
        {quote}
        &quot;
      </p>
      <span>{author}</span>
    </div>
  );
};

export default Quote;

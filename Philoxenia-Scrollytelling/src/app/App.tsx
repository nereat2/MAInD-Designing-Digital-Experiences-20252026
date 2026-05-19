import FoldOne from './components/FoldOne';
import FoldTwo from './components/FoldTwo';
import FoldThree from './components/FoldThree';
import FoldFour from './components/FoldFour';
import FoldFive from './components/FoldFive';
import FoldSix from './components/FoldSix';
import FoldSeven from './components/FoldSeven';
import FoldEight from './components/FoldEight';
import FoldEightC from './components/FoldEightC';
import FoldNine from './components/FoldNine';

export default function App() {
  return (
    <div className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
      {/* Fold 1: Hero */}
      <FoldOne />

      {/* Fold 2: What This Is */}
      <FoldTwo />

      {/* Fold 3: The World That Broke */}
      <FoldThree />

      {/* Fold 4: Two Sides of the Same Stay */}
      <FoldFour />

      {/* Fold 5: The Window */}
      <FoldFive />

      {/* Fold 6: Introducing φιλοξενία */}
      <FoldSix />

      {/* Fold 7: Philo · Optimise */}
      <FoldSeven />

      {/* Fold 8: Xeny · Wander */}
      <FoldEight />

      {/* Fold 8C: What Makes It Different */}
      <FoldEightC />

      {/* Fold 9: Beyond Airbnb */}
      <FoldNine />
    </div>
  );
}
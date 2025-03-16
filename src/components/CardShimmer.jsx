import { useTheme } from '../context/ThemeContext';

function CardShimmer() {
  //  const {isDark}=  useContext(ThemeContext)
  const { isDark } = useTheme();

  return (
    <div className="container d-flex flex-column gap-4 flex-lg-row flex-md-wrap justify-content-md-between">
      {Array.from({ length: 30 }).map((el, i) => (
        <div
          key={i}
          className={`  ${isDark ? 'bgLight' : ''} country-card shimmer  `}
        >

          <div className="cardFlag  shimmer">

          </div>

        <div className="cardPara shimmer">
          <p></p>
          <p></p>
          <p></p>
          <p className='w-50'></p>
        </div>
        
        </div>
      ))}
    </div>
  );
}

export default CardShimmer;

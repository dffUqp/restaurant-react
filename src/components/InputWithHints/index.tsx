import { FocusEvent, KeyboardEvent, useMemo, useState } from 'react';
import { useInputContext } from '../../contexts/SearchContext';
import { useSearchFilter } from '../../hooks/useSearchFilter';
import styles from './InputWithHints.module.scss';
import storeItems from '../../data/resItems.json';
import MainInput from '../UI/inputs/MainInput';
import { formatCurrency } from '../../utils/formatCurrency';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';

const InputWithHints = (): JSX.Element => {
  const { inputValue, setInputValue } = useInputContext();
  const [isHintsVisible, setIsHintsVisible] = useState(true);
  const [btnMoreVisible, setBtnMoreVisible] = useState<boolean>(false);


  const allItems = useSearchFilter(storeItems, inputValue);
  const navigate = useNavigate();
  const searchParams = createSearchParams({ q: inputValue });

  const hintsItems = useMemo(() => {
    if (!inputValue) {
      setBtnMoreVisible(false);
      return [];
    }

    if (allItems.length >= 3) {
      setBtnMoreVisible(true);
      return allItems.splice(0, 2);
    }

    setBtnMoreVisible(false);

    return allItems;
  }, [inputValue, allItems]);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsHintsVisible(false);
      }
    }, 0);
  };

  const pushQuery = () => {
    navigate(`search?${searchParams}`, { replace: true });
  };

  const onHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && pushQuery();
  };

  return (
    <MainInput
      tabIndex={1}
      onFocus={() => setIsHintsVisible(true)}
      onBlur={handleBlur}
      type="text"
      placeholder="Search..."
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={onHandler}
      value={inputValue}
    >
      {isHintsVisible && (
        <div className={styles.hints} onClick={() => setIsHintsVisible(false)}>
          {hintsItems.map((item) => (
            <Link to={'roll/' + item.id} key={item.id}>
              <div className={styles.hints__hint}>
                <div className={styles['hints__hint-hover']} />
                <img
                  src={item.imgUrl}
                  alt="roll"
                  className={styles.hints__hint__img}
                />
                <div className={styles.hints__hint__about}>
                  <span className={styles.hints__hint__title}>{item.name}</span>
                  <p className={styles.hints__hint__subtitle}>
                    Rice, eel, unagi sauce, sesame seeds, nori seaweed.
                  </p>
                </div>
                <span className={styles.hints__hint__price}>
                  {formatCurrency(item.price)}
                </span>
              </div>
            </Link>
          ))}
          {btnMoreVisible && (
            <Link to={`search?${searchParams}`}>
              <div className={styles.hints__hint}>
                <div className={styles['hints__hint-hover']} />
                <span>MOREEE</span>
              </div>
            </Link>
          )}
        </div>
      )}
    </MainInput>
  );
};

export default InputWithHints;

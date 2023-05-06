import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import storeItems from '../../data/resItems.json';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './Roll.module.scss';

const Roll = () => {
  const { id } = useParams();
  const item = storeItems.find((elem) => elem.id === Number(id ?? '0'));

  if (item == null) {
    return <Navigate to="home" />;
  }

  return (
    <Container>
      <div className={styles.roll}>
        <h1 className={styles.roll__title}>{item.name}</h1>
        <img src={item.imgUrl} alt="roll" />
        <span className={styles.roll__subtitle}>
          Price {formatCurrency(item.price)}
        </span>
        <Link className={styles.roll__link} to="/">
          Back to Restaurant
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0775 3.57733C11.4029 3.25189 11.9306 3.25189 12.256 3.57733L18.0893 9.41066C18.4148 9.7361 18.4148 10.2637 18.0893 10.5892L12.256 16.4225C11.9306 16.7479 11.4029 16.7479 11.0775 16.4225C10.7521 16.0971 10.7521 15.5694 11.0775 15.244L15.4882 10.8333H2.50008C2.03984 10.8333 1.66675 10.4602 1.66675 9.99992C1.66675 9.53968 2.03984 9.16658 2.50008 9.16658H15.4882L11.0775 4.75584C10.7521 4.4304 10.7521 3.90277 11.0775 3.57733Z"
              fill="current"
            />
          </svg>
        </Link>
      </div>
    </Container>
  );
};

export default Roll;

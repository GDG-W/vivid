import styles from './checkout.module.scss';

export const Checkout = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_container_header}>Order summary</div>

      <div className={styles.main_container_body}>
        <p className={styles.main_container_body_date}>15th & 16th November 2024</p>

        <ul className={styles.main_container_body_list_group}>
          <li className={styles.main_container_body_list_group_item}>
            <span>Two days access </span>
            <span>N20,000</span>
          </li>
          <li className={styles.main_container_body_list_group_item}>
            <span>Subtotal </span>
            <span>N20,000</span>
          </li>
          <li className={styles.main_container_body_list_group_item}>
            <span>Total </span>
            <span>N20,000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

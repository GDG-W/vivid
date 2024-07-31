import styles from './type.module.scss';

export const TicketType = () => {
  return (
    <div className={styles.t_container}>
      <div className={styles.t_container_header}>
        <h3 className={styles.t_container_header_title}> Ticket Type</h3>
        <p className={styles.t_container_header_detail}> Choose your ticket for entry pass</p>
      </div>

      <div className={styles.t_container_body}>
        <div className={styles.t_container_box}>
          <div className={styles.t_container_box_wrapper}>
            <h5 className={styles.t_container_box_wrapper_title}>One day access</h5>
            <span className={styles.t_container_box_wrapper_title}>N10,000</span>
          </div>

          <div className={styles.t_container_box_wrapper}>
            <p className={styles.t_container_box_wrapper_detail}>
              Attend devfest Lagos 2024 for just a day with access to all talks and sessions
            </p>

            <div className={styles.t_container_box_wrapper_select_con}></div>
          </div>
        </div>

        <div className={styles.t_container_box}>
          <div className={styles.t_container_body_holder_title}></div>
        </div>
      </div>
    </div>
  );
};

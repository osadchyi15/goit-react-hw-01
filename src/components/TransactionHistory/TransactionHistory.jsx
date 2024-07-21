import TransactionHistoryItem from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionTableHead}>
        <tr className={css.transactionTableHeadRow}>
          <th className={css.transactionTableHeadСell}>Type</th>
          <th className={css.transactionTableHeadСell}>Amount</th>
          <th className={css.transactionTableHeadСell}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionTableBody}>
        {items.map((item) => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

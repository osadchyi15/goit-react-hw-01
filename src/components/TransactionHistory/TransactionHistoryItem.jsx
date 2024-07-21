import css from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <tr className={css.transactionTableValues}>
      <td className={css.transactionTableValuesCell}>{type}</td>
      <td className={css.transactionTableValuesCell}>{amount}</td>
      <td className={css.transactionTableValuesCell}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

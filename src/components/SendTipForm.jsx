export default function SendTipForm() {
  return (
    <section className="card">
      <form className="send-form">
        <div className="send-form__group">
          <label className="send-form__label" htmlFor="recipient">
            Recipient Address
          </label>
          <input
            id="recipient"
            className="send-form__input"
            type="text"
            placeholder="G..."
          />
        </div>
        <div className="send-form__group">
          <label className="send-form__label" htmlFor="amount">
            Amount (XLM)
          </label>
          <input
            id="amount"
            className="send-form__input"
            type="number"
            min="0"
            step="0.0000001"
            placeholder="0.00"
          />
        </div>
        <button className="btn btn--primary btn--full" type="submit">
          Send XLM
        </button>
      </form>
    </section>
  );
}

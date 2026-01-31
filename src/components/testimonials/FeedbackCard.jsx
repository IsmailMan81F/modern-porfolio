import "./FeedbackCard.css";


export default function FeedbackCard({ info }) {
  return (
    <div className="feedback-card">
      <p className="feedback-text">{info.feedback}</p>
      <div className="feedback-owner-container">
        <div className="feedback-owner">
          <img
            src={info.picture}
            alt="owner-picture"
            className="feedback-owner-picture"
          />
          <div className="feedback-owner-profile">
            <h2 className="feedback-owner-name">{info.owner}</h2>
            <h4 className="feedback-owner-job">{info.job}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

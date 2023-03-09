const Notification = (props) => {
  //  Write your code here.
  const { className, icon, text } = props;
  return (
    <div className={`${className} box`}>
      <img src={icon} className="box-icon" />
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="blue"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information message"
    />
    <Notification
      className="green"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success message"
    />
    <Notification
      className="yellow"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning message"
    />
    <Notification
      className="red"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

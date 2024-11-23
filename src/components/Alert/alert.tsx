import classNames from "classnames";
import React, { useState } from "react";

export type AlertType = "success" | "default" | "danger" | "warning";

interface AlertProps {
  title: string;
  desc?: string;
  isClosable?: boolean;
  alertType?: AlertType;
}

const Alert: React.FC<AlertProps> = (props) => {
  const [showAlert, setShowAlert] = useState(true);
  const { title, desc, isClosable, alertType } = props;
  const classes = classNames("alert", { [`alert-${alertType}`]: alertType });
  return (
    <>
      {showAlert && (
        <div className={classes}>
          <span className="alertTitle">{title}</span>
          {desc && <p className="alertDesc">{desc}</p>}
          {isClosable && (
            <span
              className="alertClose"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              close
            </span>
          )}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  alertType: "default",
  isClosable: true,
};

export default Alert;

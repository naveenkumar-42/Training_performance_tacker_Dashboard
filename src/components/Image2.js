import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Image2.css";

const Image2 = ({
  className = "",
  propHeight,
  trainingAndPlacementFA,
  propWidth,
  propFlex,
  background,
  propMinWidth,
  propFlex1,
  needImprovement,
  propAlignSelf,
  image,
  propHeight1,
  propWidth1,
}) => {
  const imageStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const backgroundStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const improvementStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const needImprovementStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const imageIconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
    };
  }, [propHeight1, propWidth1]);

  return (
    <div className={`image9 ${className}`} style={imageStyle}>
      <div className="image-inner">
        <div className="training-and-placement-fa-parent">
          <div className="training-and-placement">{trainingAndPlacementFA}</div>
          <div className="frame-wrapper5" style={frameDivStyle}>
            <div className="frame-parent11" style={frameDiv1Style}>
              <div className="background-frame">
                <div className="background10" style={backgroundStyle}>
                  {background}
                </div>
              </div>
              <div className="improvement" style={improvementStyle}>
                <div
                  className="training-and-placement"
                  style={needImprovementStyle}
                >
                  {needImprovement}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="image-icon"
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
    </div>
  );
};

Image2.propTypes = {
  className: PropTypes.string,
  trainingAndPlacementFA: PropTypes.string,
  background: PropTypes.string,
  needImprovement: PropTypes.string,
  image: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default Image2;

import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import "./index.css";

const SkeletonCard = () => {
  return (
    <div className="card">
      <div>
        <Skeleton variant="rect" className="skeleton__avatar" />
      </div>
      <div>
        <Skeleton variant="text" className="skeleton__title" />
        <Skeleton variant="text" className="skeleton__mail" />
        <Skeleton variant="text" className="skeleton__birth" />
      </div>
    </div>
  );
};

export default SkeletonCard;

import React from "react";
import { Card, CardTitle } from "material-ui/Card";

const NoData = ({ isComment = false }) => (
  <Card>
    <CardTitle
      title={`There are no ${
        isComment ? "comments" : "posts"
      } related to this ${isComment ? "post" : "category"}`}
    />
  </Card>
);

export default NoData;

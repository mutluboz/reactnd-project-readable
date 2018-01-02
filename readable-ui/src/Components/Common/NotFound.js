import React from "react";
import { Card, CardActions, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto !important",
  textAlign: "center"
};

const NotFound = ({ history }) => {
  function handleHomeClick() {
    history.push("/");
  }

  return (
    <Card>
      <div style={containerStyle}>
        {/* <CardHeader title="404 - " /> */}
        <CardTitle title={<h1>404</h1>} subtitle={<h2>Not Found</h2>} />
        <CardActions>
          <RaisedButton
            onClick={f => handleHomeClick()}
            primary={true}
            label="Home Page"
          />
        </CardActions>
      </div>
    </Card>
  );
};

export default withRouter(NotFound);

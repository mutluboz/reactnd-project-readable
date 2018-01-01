import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { togglePostModal } from "../../Actions/PostModalActions";
import { Field, reduxForm } from "redux-form";
import { reset } from "redux-form";
import { EntryTypes } from "../../constants";

const validate = values => {
  const errors = {};
  const requiredFields = ["category", "author", "title", "body"];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
};

class EntryModal extends React.Component {
  handleClose = () => {
    this.props.close();
    this.props.reset();
  };

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

  renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );

  render() {
    const { categoryList, handleSubmit, entryType, initialValues } = this.props;

    const styles = {
      formItemStyle: {
        width: "90%"
      },
      flexContainerStyle: {
        alignItems: "center"
      },
      hiddenStyle: {
        display: "none"
      }
    };

    return (
      this.props.isVisible && (
        <Dialog
          title={`${
            !initialValues.hasOwnProperty("id") ? "Enter" : "Modify"
          } your ${entryType === EntryTypes.post ? "post" : "comment"}`}
          modal={true}
          open={this.props.isVisible}
        >
          <form onSubmit={handleSubmit}>
            <div className="v-flex-container" style={styles.flexContainerStyle}>
              {categoryList && (
                <Field
                  name="category"
                  component={this.renderSelectField}
                  label="Category"
                  style={styles.formItemStyle}
                >
                  {categoryList.map(cat => (
                    <MenuItem
                      key={cat.name}
                      value={cat.name}
                      primaryText={cat.name}
                    />
                  ))}
                </Field>
              )}

              {/*show author field for new records*/}
              {!initialValues.hasOwnProperty("id") && (
                <Field
                  name="author"
                  component={this.renderTextField}
                  label="Author"
                  style={styles.formItemStyle}
                />
              )}

              {entryType === EntryTypes.post && (
                <Field
                  name="title"
                  id="title"
                  component={this.renderTextField}
                  label="Title"
                  style={styles.formItemStyle}
                />
              )}

              <Field
                name="body"
                component={this.renderTextField}
                label={`${entryType === EntryTypes.post ? "Body" : "Comment"}`}
                multiLine={true}
                rows={2}
                rowsMax={4}
                style={styles.formItemStyle}
              />

              <div>
                <FlatButton
                  label="Cancel"
                  primary={true}
                  onClick={this.handleClose}
                />
                <FlatButton label="Submit" primary={true} type="submit" />
              </div>
            </div>
          </form>
        </Dialog>
      )
    );
  }
}

function mapStateToProps({ PostModal }) {
  return {
    isVisible: PostModal.isVisible,
    entryType: PostModal.entryType,
    initialValues: PostModal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    close: () => dispatch(togglePostModal(false)),
    reset: () => dispatch(reset("postForm"))
  };
}

EntryModal = reduxForm({
  form: "postForm",
  validate,
  enableReinitialize: true
})(EntryModal);

EntryModal = connect(mapStateToProps, mapDispatchToProps)(EntryModal);

export default EntryModal;

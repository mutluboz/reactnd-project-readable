import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { togglePostModal } from '../../Actions/PostModalActions'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form';

class EntryModal extends React.Component {

    handleClose = () => {
        this.props.close()
        this.props.reset()
    }

    renderTextField = ({
        input,
        label,
        meta: { touched, error },
        ...custom
      }) => (
            <TextField
                hintText={label}
                floatingLabelText={label}
                errorText={touched && error}
                {...input}
                {...custom}
            />
        )

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
        )

    render() {
        const { categoryList, handleSubmit } = this.props

        const styles = {
            formItemStyle: {
                width: '90%'
            },
            flexContainerStyle: {
                alignItems: 'center'
            },
            hiddenStyle: {
                display: 'none'
            }
        }

        return (
            <Dialog
                title="Enter or modify your post"
                modal={true}
                open={this.props.isVisible}
            >
                <form onSubmit={handleSubmit}>
                    <div className="v-flex-container" style={styles.flexContainerStyle}>
                        {categoryList &&
                            <Field
                                name="category"
                                component={this.renderSelectField}
                                label="Category"
                                style={styles.formItemStyle}
                            >
                                {categoryList.map(cat => (
                                    <MenuItem key={cat.name} value={cat.name} primaryText={cat.name} />
                                ))}
                            </Field>
                        }
                        {categoryList &&
                            <Field name="author" component={this.renderTextField} label="Author" style={styles.formItemStyle} />
                        }

                        <Field name="title" id="title" component={this.renderTextField} label="Title" style={styles.formItemStyle} />

                        <Field
                            name="body"
                            component={this.renderTextField}
                            label="Body"
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
                            <FlatButton
                                label="Submit"
                                primary={true}
                                type="submit"
                            />
                        </div>
                    </div>
                </form>
            </Dialog>

        )
    }
}

function mapStateToProps({ PostModal }) {
    return {
        isVisible: PostModal.isVisible,
        initialValues: PostModal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        close: () => dispatch(togglePostModal(false)),
        reset: () => dispatch(reset('postForm'))
    }
}

EntryModal = reduxForm({
    form: 'postForm',
    enableReinitialize: true

})(EntryModal)

EntryModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryModal)

export default EntryModal
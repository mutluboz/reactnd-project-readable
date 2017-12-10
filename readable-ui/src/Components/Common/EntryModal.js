import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

class EntryModal extends React.Component {

    state = {
        value: null
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        const { categoryList } = this.props

        const styles = {
            formItemStyle: {
                width: '90%'
            },
            flexContainerStyle: {
                alignItems: 'center'
            }
        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={f => this.props.closeModal()}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.props.closeModal}
            />,
        ]

        return (
            <Dialog
                title="Enter or modify your post"
                modal={true}
                open={this.props.isOpen}
                actions={actions}
            >
                <div className="v-flex-container" style={styles.flexContainerStyle}>
                    {categoryList &&
                        <SelectField
                            value={this.state.value}
                            floatingLabelText="Category"
                            onChange={this.handleChange}
                            style={styles.formItemStyle}
                        >
                            {categoryList.map(cat => {
                                return <MenuItem key={cat.name} value={cat.name} primaryText={cat.name} />
                            })}
                        </SelectField>
                    }
                    <TextField
                        floatingLabelText="Title"
                        style={styles.formItemStyle}
                    />
                    <TextField
                        floatingLabelText="Body"
                        hintText="Enter your post here!"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        style={styles.formItemStyle}
                    />
                </div>
            </Dialog>
        )
    }
}

export default EntryModal

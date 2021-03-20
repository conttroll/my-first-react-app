import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    editProfileStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.editProfileStatus} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                    <button>Save</button>
                </div>
            }
        </>
    }
}

export default ProfileStatus;
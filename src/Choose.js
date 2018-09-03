import React, { Component } from 'react';

class Choose extends Component {
    render() {
        return (
            <div>
                <label>
                    <input
                        name="status"
                        type="radio"
                        value="idea"
                        checked={this.props.values.status === 'idea'}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    Ideia
                </label>
                <label>
                    <input
                        name="status"
                        type="radio"
                        value="project"
                        checked={this.props.values.status === 'project'}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    Projeto escrito
                </label>
                <label>
                    <input
                        name="status"
                        type="radio"
                        value="site"
                        checked={this.props.values.status === 'site'}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    Site
                </label>
                <label>
                    <input
                        name="status"
                        type="radio"
                        value="app"
                        checked={this.props.values.status === 'app'}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    Aplicativo já desenvolvido
                </label>
            </div>
        )
    }
}

export default Choose;
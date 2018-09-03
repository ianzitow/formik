import React, { Component } from 'react';

class Budget extends Component {
    render() {
        return (
            <div>
                <p>Qual é o seu orçamento</p>
                <label>
                    <input
                        name="status"
                        type="radio"
                        value="idea"
                        checked={this.props.values.status === 'idea'}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    Acima de R$ 200 mil
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
                    Entre R$ 100 a 200 mil
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
                    Entre R$ 50 a 100 mil
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
                    Abaixo de R$ 50 mil
                </label>
            </div>
        )
    }
}

export default Budget;
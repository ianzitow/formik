import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div>
                <div className="input string optional contact_name form-group">
                    <label className="string optional" htmlFor="contact_name">
                        Name
                    </label>
                    <input 
                        className="string optional" 
                        type="text" 
                        name="name" 
                        id="contact_name"  
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.name}
                    />
                    {this.props.touched.name && this.props.errors.name && <div>{this.props.errors.name}</div>}
                </div>
                <div className="input email optional contact_email form-group">
                    <label className="email optional" htmlFor="contact_email">
                        Email
                    </label>
                    <input 
                        className="string email optional" 
                        type="email" 
                        name="email" 
                        id="contact_email" 
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.email}
                    />
                    {this.props.touched.email && this.props.errors.email && <div>{this.props.errors.email}</div>}
                </div>
                <div className="input tel optional contact_phone form-group">
                    <label className="tel optional" htmlFor="contact_phone">Phone</label>
                    <input 
                        className="string tel optional" 
                        type="tel" 
                        name="phone" 
                        id="contact_phone" 
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.phone}
                    />
                    {this.props.touched.phone && this.props.errors.phone && <div>{this.props.errors.phone}</div>}
                </div>
                <div className="input text optional contact_message form-group">
                    <label className="text optional" htmlFor="contact_message">Message</label>
                    <textarea 
                        className="text optional" 
                        name="message" 
                        id="contact_message"
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        value={this.props.values.message}
                    >
                    </textarea>
                    {this.props.touched.message && this.props.errors.message && <div>{this.props.errors.message}</div>}
                </div>
            </div>
        )
    }
}

export default Project;
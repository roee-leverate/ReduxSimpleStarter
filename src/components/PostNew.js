import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostNew extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  renderField(field) {
    const { meta: {error, touched}} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help" style={{color: "red"}}>
        {touched? error : ''}
      </div>

      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field label="Categories" name="categories" component={this.renderField} />
          <Field label="Post Content" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger" >Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  let errors = {}

  if(!values.title) {
    errors.title = 'Enter Title'
  }

  if(!values.categories) {
    errors.categories = 'no categories selceted'
  }

  if(!values.content) {
    errors.content = 'Enter content man...'
  }

  return errors
}

// export default reduxForm({
//   validate,
//   form: 'PostsNewForm'
// })(PostNew)

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostNew)
)

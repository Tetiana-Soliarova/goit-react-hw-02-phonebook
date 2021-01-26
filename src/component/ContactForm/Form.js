import { Component } from 'react'
import styles from './form.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  //метод который обновляет состояние
  hendleNameChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  //метод который Submit form
  hendleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.reset()
  }

  //очистка форми
  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <label className={styles.label}>
            <input
              className={styles.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.hendleNameChange}
            />
          </label>
          <label className={styles.label}>
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.hendleNameChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    )
  }
}

export default ContactForm

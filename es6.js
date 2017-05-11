import React, { Component } from 'react'

class Child extends Component {
  checkConditions (index, min, max, count) {
    const from = (min === undefined) ? 0 : min
    const to = (max === undefined) ? Infinity : max
    const length = (count === undefined) ? Infinity : count
    const limit = Math.min(to, (length + from))
    return from <= index && index < limit
  }

  conditions (min, max, count) {
    return (index) => {
      return this.checkConditions(index, min, max, count)
    }
  }

  render () {
    const { min, max, count, children, all } = this.props
    if (this.props.hide || children === undefined || count === 0) return <div className={this.props.className} />
    if (typeof children !== 'object' || children.length === undefined || all) return <div className={this.props.className}>{children}</div>
    return <div className={this.props.className}>{children.filter(this.conditions(min, max, count))}</div>
  }
}

export default class Base extends Component {
  const { style } = this.props
  render () {
    return <div className={style}><Child {...this.props} /></div>
  }
}

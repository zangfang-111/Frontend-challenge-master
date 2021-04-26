import React from 'react'

/**
 * Optimized Input formatted with this project input style.
 *
 * @param {String} placeholder
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {String} type // optional
 * @param {String} disabled // optional
 * @param {String} classes // optional
 *
 * @return {Component}
 *
 */

function Input ({
  placeholder,
  type,
  onChange,
  value,
  name,
  disabled,
  classes = ''
}) {
  return (
    <div className={`input ${classes}`}>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        onChange={e => onChange(name, e)}
        value={value}
        name={name}
        disabled={disabled || disabled}
        data-testid={name}
      />
      {/* validation message here */}
    </div>
  )
}

export default Input

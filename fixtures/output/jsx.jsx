export function HelloWorld({ greeted = '"World"', greeting = 'hello', silent = false, onMouseOver }) {
  if (!greeting) {
    return null
  }

  // TODO: Don't use random in render
  const num = Math.floor(Math.random() * 1e7)
    .toString()
    .replaceAll(/\.\d+/gi, '')

  return (
    <div
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
      className="HelloWorld"
    >
      <strong>{greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}</strong>
      {greeting.endsWith(',') ? ' ' : <span style={{ color: 'grey' }}>", "</span>}
      <em>{greeted}</em>
      {silent ? '.' : '!'}
    </div>
  )
}

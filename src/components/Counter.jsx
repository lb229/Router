import React from 'react'

export const Counter = ({ initialValue = 0, incrementBy = 1 }) => {
  const [count, setCount] = useState(initialValue);
  return (
		<div>
			<p data-testid="count">{count}</p>
			<button onClick={() => setCount((c) => c + incrementBy)}>Increment</button>
		</div>
  )
}

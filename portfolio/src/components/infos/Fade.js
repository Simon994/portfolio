import React from 'react'

// const observerOptions = {
//   root: null,
//   rootMargin: '0px',
//   threashold: 0
// }

export default function FadeIn(props) {
  const domRef = React.useRef()
  const [isVisible, setVisible] = React.useState(false)
  
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(function(entry) {
        setVisible(entry.isIntersecting)
        } 
      )
    }
  )

  React.useEffect(() => {
    observer.observe(domRef.current)
    return () => observer.disconnect()
  })

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

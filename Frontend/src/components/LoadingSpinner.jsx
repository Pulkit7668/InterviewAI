import "./styles/loading.scss";

const LoadingSpinner = ({ fullScreen = false, message = "Loading..." }) => {
  if (fullScreen) {
    return (
      <main className='loading-screen'>
        <div className='spinner-container'>
          <div className='spinner-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="loading-message">{message}</p>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className='loading-inline'>
      <div className='spinner-small'></div>
      <span>{message}</span>
    </div>
  )
}

export default LoadingSpinner
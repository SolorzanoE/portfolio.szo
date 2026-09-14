import { Component } from "react"

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  /** @param {Error} error */
  componentDidCatch(error) {
    console.error("Unexpected portfolio render error", error)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main
        role="alert"
        aria-live="assertive"
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Algo salió mal</h1>
          <p>Recarga la página para volver a intentar.</p>
          <button type="button" onClick={this.handleReload}>
            Recargar
          </button>
        </div>
      </main>
    )
  }
}

export default ErrorBoundary

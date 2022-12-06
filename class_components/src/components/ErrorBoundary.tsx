import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state: Readonly<{ hasError: boolean }> = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

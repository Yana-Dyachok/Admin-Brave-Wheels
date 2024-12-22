'use client';
import { Component, ErrorInfo, ReactNode } from 'react';
import Button from '../components/ui/button/button';
import '../styles/common.scss';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Error occurred:', error);
    console.error('Component stack:', info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="container">
          <h2>Ooops... You are getting an error</h2>
          <Button btnType="button" to="/">
            Back
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

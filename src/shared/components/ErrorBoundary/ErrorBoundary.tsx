import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Rick } from 'src/assets';

import styles from './ErrorBoundary.module.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Ошибка:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <img className={styles.error__pic} src={Rick} alt='Rick' />
          <p className={styles.error__text}>
            Oops. Something went wrong. Rick’s already on it.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

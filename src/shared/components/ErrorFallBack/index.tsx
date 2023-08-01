import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default Fallback;
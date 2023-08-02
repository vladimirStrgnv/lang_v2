import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {

  return (
    <div role="alert">
      <p>Что то пошло не так:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default Fallback;
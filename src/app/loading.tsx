export default function Loading() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <span className="loading-mark" aria-hidden="true" />
      <p>Preparing the page…</p>
    </div>
  );
}

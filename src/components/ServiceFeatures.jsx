// components/ServiceFeatures.jsx
export default function ServiceFeatures({ features }) {
  return (
    <ul className="space-y-4 text-lg list-disc list-inside">
      {features?.map((f, i) => (
        <li key={i}>{f}</li>
      )) || <li>No features available</li>}
    </ul>
  );
}

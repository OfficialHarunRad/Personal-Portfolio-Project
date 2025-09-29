// src/components/GitHubGraph.jsx
function GitHubGraph({ username }) {
  return (
    <div className="github-graph bg-white p-6 rounded-lg shadow-lg text-center w-full">
      <h2 className="text-black text-2xl font-semibold mb-4">GitHub Contributions</h2>
      <img
        className="mx-auto w-full h-auto"
        src={`https://ghchart.rshah.org/${username}`}
        alt={`${username}'s GitHub Contribution Graph`}
      />
      <p className="text-sm text-gray-600 mt-2">
        Generated from <a className="underline" href="https://ghchart.rshah.org" target="_blank" rel="noreferrer">ghchart.rshah.org</a>
      </p>
    </div>
  );
}

export default GitHubGraph;

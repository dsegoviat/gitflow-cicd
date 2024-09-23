const preset = "conventionalcommits";
const branch = "develop";
module.exports = {
  branches: [branch],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    [
      "semantic-release-github-pullrequest", {
        "assets": ["CHANGELOG.md"],
        "baseRef": branch
      }
    ]
  ]
};

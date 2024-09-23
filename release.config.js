const preset = "conventionalcommits";
module.exports = {
  branches: ["develop"],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    [
      "semantic-release-github-pullrequest", {
        assets: ["CHANGELOG.md"],
        baseRef: "main",
        branch: "release/${nextRelease.version}"
      }
    ]
  ]
};

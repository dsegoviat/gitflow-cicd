const preset = "conventionalcommits";
module.exports = {
  branches: ["develop"],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    [
      "@semantic-release/exec",
      {
        publishCmd: "./release.sh ${nextRelease.version} ${branch.name}",
      },
    ],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/github"]
  ],
};

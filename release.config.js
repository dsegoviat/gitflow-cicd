const preset = "conventionalcommits";
module.exports = {
  branches: [
    { name: "main" },
    { name: "develop" },
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/github"],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version}",
      },
    ],
    [
      "@saithodev/semantic-release-backmerge",
      {
        clearWorkspace: true,
        backmergeBranches: [{ from: "main", to: "develop" }],
        mergeMode: "ours",
      },
    ],
  ],
};

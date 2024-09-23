const preset = "conventionalcommits";
module.exports = {
  branches: [
    "master",
    { name: "develop", prerelease: "beta" },
    { name: "release/*", prerelease: "rc", channel: "next" },
    { name: "hotfix/*", prerelease: "fix", channel: "hotfix" },
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/github"],
    [
      '@saithodev/semantic-release-backmerge',
      {
        clearWorkspace: true,
        backmergeStrategy: 'merge',
        mergeMode: 'ours'
      }
    ]
  ],
};

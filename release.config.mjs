export default {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    { name: 'beta', channel: 'beta', prerelease: true },
  ],
  plugins: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md',
    },
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

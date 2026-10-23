# Repository Instructions

Shared Sites policy (`../AGENTS.md` when available) applies. These essentials also apply in standalone checkouts:
- Never SSH, SCP, SFTP, tunnel to, or configure access to production. Do not deploy it; protected server-side automation owns activation, and source delivery alone does not prove deployment.
- GitGuardian quota, authentication, network, or service failure is not a commit/push blocker. Review outgoing changes, run another available local secret scan, preserve other hooks, and stop on real secret findings.
- Commit small, coherent, validated changes frequently as work progresses and push completed work through this repository's authorized source path, usually its default branch; use pull requests only when required.
- Group related changes into meaningful deployable milestones. Align version metadata, create a new immutable annotated semver tag, and publish its matching verified GitHub release with the required accepted artifacts.
- Complete finished deployable work through the published release consumed by protected deployment. Independently verify public release identity and acceptance read-only, or report the exact remaining blocker. Never move published tags or replace published release assets.

## ScopeCraft Release Boundary

- Keep the portable `dist/client` educational game separate from its optional Sites adapter. Do not place private matter material, provider credentials, or operator-only files in the public artifact.
- Changes to reviewed challenges require the `challenges:check` gate and saved-attempt compatibility contract. The downloadable practice library requires its independently approved digest; generating a candidate digest is not approval and must not bypass `verify:download-approval`.
- For application or release changes, use the pinned toolchain and the repository's `npm run check`, `npm run audit`, and `npm run build` gates. These cover the standalone artifact and the Sites adapter separately; do not infer production activation from either build.

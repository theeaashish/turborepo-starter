export interface ProcessorConfig {
  configPath?: string;
  owner: string;
  repo: string;
  installationId: number;
}

export class GitScribeProcessor {
  private config: ProcessorConfig;

  constructor(config: ProcessorConfig) {
    this.config = config;
  }

  async processPush(commitSha: string): Promise<void> {
    console.log(`Processing push for commit: ${commitSha}`);
    // implementation pending
  }

  async processPullRequest(prNumber: number): Promise<void> {
    console.log(`Processing PR #${prNumber}`);
    // implementation pending
  }
}

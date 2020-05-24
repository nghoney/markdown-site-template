export class Config {
  admin: string;
  owner: string;
  repo: string;
  branch: string;

  constructor(defaultOwner?: string, defaultRepo?: string, defaultBranch?: string) {
    this.owner = defaultOwner;
    this.repo = defaultRepo;
    this.branch = defaultBranch;
  }


}

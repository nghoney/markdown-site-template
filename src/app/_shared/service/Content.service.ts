import { Injectable } from '@angular/core';

import { ConfigService } from './config.service';
import { GitService } from './git.service';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {

  constructor(
    private confService: ConfigService,
    private gitService: GitService,
    private utilsService: UtilsService
  ) { }

  getLeftMenuCatalogs(): Promise<any[]> {
    return this.gitService
      .getLabels(
        this.confService.config.owner,
        this.confService.config.repo);
  }

  getFiles(dir: string): Promise<any[]> {
    return this.gitService
      .simpleGetIssues(
        this.confService.config.owner,
        this.confService.config.repo,
        'documents',
        1,
        100,
        'open',
        'created',
        'asc',
        dir
      );
  }

  getFile(number: string): Observable<any> {
    return this.gitService
      .getIssue(
        this.confService.config.owner,
        this.confService.config.repo,
        number
      )
  }

  getFileContent(path: string): Observable<any> {
    return this.gitService
      .getFileContent(
        this.confService.config.owner,
        this.confService.config.repo,
        path,
        this.confService.config.branch);
  }

  // create files
  createFile(dir: string, file: string, labels?: string[]): Promise<any> {
    return this.gitService
      .createIssue(
        this.confService.config.owner,
        this.confService.config.repo,
        file,
        '# ' + file,
        1,
        [dir],
        sessionStorage.getItem('access_token')
      ).then(issue =>
        this.gitService
          .createFile(
            this.confService.config.owner,
            this.confService.config.repo,
            '/' + 'docs/' + issue.number,
            this.utilsService.b64EncodeUnicode('# ' + file),
            ':article:《' + file + '》 created',
            sessionStorage.getItem('access_token'),
            this.confService.config.branch
          )
      );
  }

  // delete files
  deleteFile(number: string, title: string): Promise<any> {
    return this.gitService
      .updateIssue(
        this.confService.config.owner,
        this.confService.config.repo,
        number,
        title,
        sessionStorage.getItem('access_token'),
        'closed'
      )
  }

  // update files contents
  updateFileContent(fileContents: any, title: string, content: string): Promise<any> {
    return this.gitService
      .updateFile(
        this.confService.config.owner,
        this.confService.config.repo,
        '/' + fileContents.path,
        this.utilsService.b64EncodeUnicode(content),
        fileContents.sha,
        ':article:《' + title + '》 updated',
        sessionStorage.getItem('access_token'),
        this.confService.config.branch
      );
  }

  updateFile(number: string, title: string, body: string, path: string): Promise<any> {
    return this.gitService
      .updateIssue(
        this.confService.config.owner,
        this.confService.config.repo,
        number,
        title,
        sessionStorage.getItem('access_token'),
        'open',
        body
      ).then(updateIssueResult =>
        this.getFileContent(path)
          .subscribe(fileContent =>
            this.updateFileContent(fileContent, title, body)
          )
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";


const apiBasePath = environment.apiBasePath;
const apiRepoBasePath = environment.apiRepoBasePath;
const apiUserBasePath = environment.apiUserBasePath;

@Injectable()
export class GitService {
  

  constructor(
    private http: HttpClient

  ) {

  }
  // Activity
  starred(owner: string, repo: string, access_token: string): void {
    let url = apiUserBasePath + 'starred/' + owner + '/' + repo;
    let body = {
      access_token: access_token
    }
    this.http
      .put(url, body)
      .toPromise()
      .then();
  }

  // Git Data
  getBlob(owner: string, repo: string, sha: string, access_token?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/git/blobs/' + sha;
    let params = access_token
      ? { access_token: access_token }
      : {};
    return this.http
      .get(url, {
        params: params
      })
      .toPromise()
      .then(response => response);
  }

  getTree(owner: string, repo: string, sha: string, recursive?: number, access_token?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/git/gitee/trees/' + sha;
    let params = {};
    if (access_token) {
      params = recursive
        ? { access_token: access_token, recursive: recursive }
        : { access_token: access_token };
    } else if (recursive) {
      params = { recursive: recursive }
    }
    return this.http
      .get<any>(url, {
        params: params
      })
      .toPromise();
  }

  // Issues
  simpleGetIssues(owner: string, repo: string, milestone: string, page = 1, per_page = 20, state = 'open', sort = 'created', direction = 'desc', labels?: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/issues';
    let params = labels
      ? {
        milestone: milestone,
        labels: labels,
        page: '' + page,
        per_page: '' + per_page,
        state: state,
        sort: sort,
        direction: direction
      }
      : {
        milestone: milestone,
        page: '' + page,
        per_page: '' + per_page,
        state: state,
        sort: sort,
        direction: direction
      };
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  createIssue(owner: string, repo: string, title: string, body: string, milestone: number, labels: string[], accessToken: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/issues';
    let requestBody = {
      title: title,
      body: body,
      milestone: milestone,
      labels: labels,
      access_token: accessToken
    }
    return this.http
      .post<any>(url, requestBody)
      .toPromise();
  }

  getIssue(owner: string, repo: string, number: string, accessToken?: string): Observable<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/issues/' + number;
    let params = accessToken
      ? { access_token: accessToken }
      : {};
    return this.http
      .get(url, {
        params: params
      });
  }

  updateIssue(owner: string, repo: string, number: string, title: string, accessToken: string, state?: string, body?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/issues/' + number;
    let requestBody = { title: title, access_token: accessToken, state: state, body: body };
    return this.http
      .patch(url, requestBody)
      .toPromise();
  }

  // Labels
  getLabels(owner: string, repo: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/labels';
    return this.http
      .get<any[]>(url)
      .toPromise();
  }

  getCommentsOfIssue(owner: string, repo: string, number: string, page = 1, perPage = 20, accessToken?: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/issues/' + number + '/comments';
    let params = accessToken
      ? { page: page + '', per_page: perPage + '', access_token: accessToken }
      : { page: page + '', per_page: perPage + '' };
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }
  // Miscellaneous
  markdownText(text: string, access_token?: string): Promise<string> {
    let url = apiBasePath + '/v5/markdown';
    let body = access_token
      ? { text: text, access_token: access_token }
      : { text: text };
    return this.http
      .post(url, body, {
        responseType: 'text'
      })
      .toPromise();
  }

  // Repositories
  getBranches(owner: string, repo: string, access_token?: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/branches';
    let params = access_token
      ? { access_token: access_token }
      : {}
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  simpleGetCommits(owner: string, repo: string, sha: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/commits';
    let params = {
      sha: sha
    };
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  getReadme(owner: string, repo: string, ref?: string, access_token?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/readme';
    let params = {};
    if (ref) {
      params = access_token
        ? { ref: ref, access_token: access_token }
        : { ref: ref };
    } else if (access_token) {
      params = { access_token: access_token };
    }
    return this.http
      .get(url, {
        params: params
      })
      .toPromise();
  }

  getDirContents(owner: string, repo: string, path?: string, ref?: string, access_token?: string): Promise<any[]> {
    let url = path
      ? apiRepoBasePath + owner + '/' + repo + '/contents' + path
      : apiRepoBasePath + owner + '/' + repo + '/contents';

    let params = {};
    if (ref) {
      params = access_token
        ? { ref: ref, access_token: access_token }
        : { ref: ref };
    } else if (access_token) {
      params = { access_token: access_token };
    }

    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  getFileContent(owner: string, repo: string, path: string, ref?: string, access_token?: string): Observable<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/contents' + path;

    let params = {};
    if (ref) {
      params = access_token
        ? { ref: ref, access_token: access_token }
        : { ref: ref };
    } else if (access_token) {
      params = { access_token: access_token };
    }

    return this.http
      .get(url, {
        params: params
      });
  }

  updateFile(owner: string, repo: string, path: string, content: string, sha: string, message: string, access_token: string, branch?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/contents' + path;
    let body = branch
      ? { content: content, sha: sha, message: message, access_token: access_token, branch: branch }
      : { content: content, sha: sha, message: message, access_token: access_token };
    return this.http
      .put(url, body)
      .toPromise();
  }

  createFile(owner: string, repo: string, path: string, content: string, message: string, access_token: string, branch: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/contents' + path;
    let body = { content: content, message: message, access_token: access_token, branch: branch };
    return this.http
      .post<any>(url, body)
      .toPromise();
  }

  deleteFile(owner: string, repo: string, path: string, sha: string, message: string, access_token: string, branch?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo + '/contents' + path;
    let params = branch
      ? { sha: sha, message: message, access_token: access_token, branch: branch }
      : { sha: sha, message: message, access_token: access_token };
    return this.http
      .delete(url, {
        params: params
      })
      .toPromise();
  }

  getRepo(owner: string, repo: string, access_token?: string): Promise<any> {
    let url = apiRepoBasePath + owner + '/' + repo;
    let params = access_token
      ? { access_token: access_token }
      : {};
    return this.http
      .get(url, {
        params: params
      })
      .toPromise();
  }

  getTags(owner: string, repo: string, access_token?: string): Promise<any[]> {
    let url = apiRepoBasePath + owner + '/' + repo + '/tags';
    let params = access_token
      ? { access_token: access_token }
      : {};
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  // users
  getAuthUserInfo(access_token: string): Promise<any> {
    let params = {
      access_token: access_token
    }
    return this.http
      .get(apiUserBasePath, {
        params: params
      })
      .toPromise();
  }
}

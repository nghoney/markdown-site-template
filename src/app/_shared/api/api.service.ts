/*
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-05-24 12:48:18
 * @LastEditors: Edward
 * @FilePath: \markdown-site-template\src\app\_shared\service\git.service.ts
 * @LastEditTime: 2020-05-25 18:00:43
 * @description: NG markdown site template
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { LeftMenuCatalogItem, NewsItem } from '../model';

const apiBasePath = environment.apiBasePath;
const apiRepoBasePath = environment.apiRepoBasePath;
const apiUserBasePath = environment.apiUserBasePath;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  owner: string;
  repo: string;
  branch: string;

  //user related repo url
  gitUserRepoUrl: string;
  gitUserStarredRepoUrl: string;
  gitBlobUrl: string;
  gitTreeUrl: string;
  gitIssueUrl: string;
  gitRepoContentUrl: string;
  gitRepoTags: string;
  gitRepoBranches: string;
  gitRepoCommits: string;

  //markdown url
  markdownUrl: string;

  constructor(
    private http: HttpClient,
  ) {

    this.markdownUrl = apiBasePath + '/v5/markdown';
    //starred url
    this.updateAPIUrl()

  }

  updateAPIUrl() {

    this.gitUserRepoUrl = apiRepoBasePath + '/' + this.owner + '/' + this.repo;
    this.gitUserStarredRepoUrl = apiUserBasePath + '/starred/' + this.owner + '/' + this.repo;
    this.gitBlobUrl = this.gitUserRepoUrl + '/git/blobs/';
    this.gitTreeUrl = this.gitUserRepoUrl + '/git/gitee/trees/';
    this.gitIssueUrl = this.gitUserRepoUrl + '/issues/';
    this.gitRepoContentUrl = this.gitUserRepoUrl + '/contents';
    this.gitRepoTags = this.gitRepoContentUrl + '/tags';
    this.gitRepoBranches = this.gitUserRepoUrl + '/branches';
    this.gitRepoCommits = this.gitUserRepoUrl + '/commits';

  }

  setupOwnerRepoBranch(owner: string, repo: string, branch?: string) {
    this.owner = owner;
    this.repo = repo;
    if (branch != null) {
      this.branch = branch;
    }

  }

  fromUserRepo(owner: string, repo: string): ApiService {
    this.setupOwnerRepoBranch(owner, repo);
    this.updateAPIUrl()
    return this;
  }

  // Activity
  starred(access_token: string): void {

    let body = {
      access_token: access_token
    }
    this.http
      .put(this.gitUserStarredRepoUrl, body)
      .toPromise()
      .then();
  }

  // Git Data
  getBlob(sha: string, access_token?: string): Promise<any> {
    let targetUrl = this.gitBlobUrl + sha;
    let params = access_token ? { access_token: access_token } : {};
    return this.http.get(targetUrl, { params: params })
      .toPromise()
      .then(response => response);
  }

  getTree(owner: string, repo: string, sha: string, recursive?: number, access_token?: string): Promise<any> {
    let url = this.gitTreeUrl + sha;
    let params = {};
    if (access_token) {
      params = recursive ? { access_token: access_token, recursive: recursive } : { access_token: access_token };
    } else if (recursive) {
      params = { recursive: recursive }
    }
    return this.http
      .get<any>(url, {
        params: params
      })
      .toPromise();
  }

  //getStateMilestoneIssues : Issues stand for contents
  getStateMilestoneIssues(milestone: string, page = 1, per_page = 20, state = 'open', sort = 'created', direction = 'desc', labels?: string): Promise<any[]> {

    let params = labels ?
      {
        milestone: milestone,
        labels: labels,
        page: '' + page,
        per_page: '' + per_page,
        state: state,
        sort: sort,
        direction: direction
      } : {
        milestone: milestone,
        page: '' + page,
        per_page: '' + per_page,
        state: state,
        sort: sort,
        direction: direction
      };

    // console.log('output params:',params);
    return this.http.get<any[]>(this.gitIssueUrl, { params: params }).toPromise();
  }

  createIssue(owner: string, repo: string, title: string, body: string, milestone: number, labels: string[], accessToken: string): Promise<any> {
    let requestBody = {
      title: title,
      body: body,
      milestone: milestone,
      labels: labels,
      access_token: accessToken
    }
    return this.http
      .post<any>(this.gitIssueUrl, requestBody)
      .toPromise();
  }

  getIssue(number: string, accessToken?: string): Observable<any> {
    let url = this.gitIssueUrl + number;
    let params = accessToken ? { access_token: accessToken } : {};
    return this.http
      .get(url, { params: params });
  }

  updateIssue(number: string, title: string, accessToken: string, state?: string, body?: string): Promise<any> {
    let url = this.gitIssueUrl + number;
    let requestBody = { title: title, access_token: accessToken, state: state, body: body };
    return this.http
      .patch(url, requestBody)
      .toPromise();
  }

  // Labels
  getLabels(): Promise<LeftMenuCatalogItem[]> {
    let url = this.gitUserRepoUrl + '/labels';
    return this.http.get<any[]>(url).toPromise();
  }

  getCommentsOfIssue(owner: string, repo: string, number: string, page = 1, perPage = 20, accessToken?: string): Promise<any[]> {
    let url = this.gitIssueUrl + number + '/comments';
    let params = accessToken
      ? { page: page + '', per_page: perPage + '', access_token: accessToken }
      : { page: page + '', per_page: perPage + '' };
    return this.http
      .get<any[]>(url, {
        params: params
      })
      .toPromise();
  }

  // markdownText
  markdownText(text: string, access_token?: string): Promise<string> {

    let body = access_token ? { text: text, access_token: access_token } : { text: text };
    return this.http
      .post(this.markdownUrl, body, { responseType: 'text' })
      .toPromise();
  }

  // Repositories
  getBranches(owner: string, repo: string, access_token?: string): Promise<any[]> {

    let params = access_token ? { access_token: access_token } : {}
    return this.http
      .get<any[]>(this.gitRepoBranches, {
        params: params
      })
      .toPromise();
  }

  simpleGetCommits(owner: string, repo: string, sha: string): Promise<any[]> {

    let params = {
      sha: sha
    };
    return this.http
      .get<any[]>(this.gitRepoCommits, {
        params: params
      })
      .toPromise();
  }

  getReadme(owner: string, repo: string, ref?: string, access_token?: string): Promise<any> {
    let url = this.gitUserRepoUrl + '/readme';
    let params = {};
    if (ref) {
      params = access_token ? { ref: ref, access_token: access_token } : { ref: ref };
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
    let url = path ? this.gitRepoContentUrl + path : this.gitRepoContentUrl;
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
    let url = this.gitRepoContentUrl + path;

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
    let url = this.gitRepoContentUrl + path;
    let body = branch
      ? { content: content, sha: sha, message: message, access_token: access_token, branch: branch }
      : { content: content, sha: sha, message: message, access_token: access_token };
    return this.http
      .put(url, body)
      .toPromise();
  }

  createFile(owner: string, repo: string, path: string, content: string, message: string, access_token: string, branch: string): Promise<any> {
    let url = this.gitRepoContentUrl + path;
    let body = { content: content, message: message, access_token: access_token, branch: branch };
    return this.http
      .post<any>(url, body)
      .toPromise();
  }

  deleteFile(owner: string, repo: string, path: string, sha: string, message: string, access_token: string, branch?: string): Promise<any> {
    let url = this.gitRepoContentUrl + path;
    let params = branch
      ? { sha: sha, message: message, access_token: access_token, branch: branch }
      : { sha: sha, message: message, access_token: access_token };
    return this.http
      .delete(url, {
        params: params
      })
      .toPromise();
  }

  getRepo(access_token?: string): Promise<any> {
    let params = access_token ? { access_token: access_token } : {};
    return this.http
      .get(this.gitUserRepoUrl, { params: params })
      .toPromise();
  }

  getTags(owner: string, repo: string, access_token?: string): Promise<any[]> {
    let params = access_token
      ? { access_token: access_token }
      : {};
    return this.http
      .get<any[]>(this.gitRepoTags, {
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
      .get(apiUserBasePath, { params: params })
      .toPromise();
  }
}

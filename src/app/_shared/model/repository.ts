/*
 * @Repo: https://github.com/nghoney/markdown-site-template
 * @Author: Edward https://github.com/crazybber
 * @Date: 2020-06-03 16:30:29
 * @Last Modified by: Edward
 * @Last Modified time: 2020-06-03 17:06:33
 */

import { Owner } from './user';

export class Repository {
    blobs_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/blobs{/sha}"
    branches_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/branches{/branch}"
    can_comment: Boolean;
    collaborators_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/collaborators{/collaborator}"
    comments_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/comments{/number}"
    commits_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/commits{/sha}"
    contributors_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/contributors"
    created_at: string; //"2020-05-18T20:06:42+08:00"
    default_branch: string; //"master"
    description: string; //"the most simple and easy site template with data ability but without server!"
    fork: Boolean;
    forks_count: number; //0
    forks_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/forks"
    full_name: string; //"crazybber/markdown-site-template"
    has_issues: Boolean;
    has_page: Boolean;
    has_wiki: Boolean;
    homepage: string; //""
    hooks_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/hooks"
    html_url: string; //"https://gitee.com/crazybber/markdown-site-template.git"
    human_name: string; //"Edward/markdown-site-template"
    id: number; //9420731
    internal: Boolean;
    issue_comment: Boolean;
    issue_comment_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/issues/comments{/number}"
    issues_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/issues{/number}"
    keys_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/keys{/key_id}"
    labels_url: string; // "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/labels{/name}"
    language: string; //"TypeScript"
    license: string; //"Apache-2.0"
    members: string[];
    milestones_url: string; // "https://gitee.com/api/v5/repos/crazybber/markdown-site-template/milestones{/number}"
    name: string; //"markdown-site-template"
    namespace: Namespace;
    notifications_url: string;//"//"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/notifications{?since,all,participating}"
    open_issues_count: number; //5
    outsourced: Boolean;//false
    owner :Owner;
    path: string;//"markdown-site-template"
    private: Boolean;// false
    project_creator: string;//"  "//crazybber"
    public: Boolean;//
    pull_requests_enabled: Boolean;//true
    pulls_url: string;//"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/pulls{/number}"
    pushed_at: string;//""2020-06-03T14:10:09+08:00"
    recommend: Boolean;//false
    releases_url: string;///"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/releases{/id}"
    ssh_url: string;//"git@gitee.com:crazybber/markdown-site-template.git"
    stargazers_count: number; //0
    stargazers_url: string; //"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/stargazers"
    tags_url: string;///"https://gitee.com/api/v5/repos/crazybber/markdown-site-template/tags"
    updated_at: string;///"2020-06-03T14:10:09+08:00"
    url: string;///"https://gitee.com/api/v5/repos/crazybber/markdown-site-template"
    watchers_count: number; //2

}


export class Namespace {

    html_url: string; //"https://gitee.com/crazybber"
    id: number; //628396
    name: string; //"Edward"
    path: string; //"crazybber"
    type: string; //"personal"

}

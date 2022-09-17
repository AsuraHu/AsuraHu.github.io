---
title: Hexo 的下载、更换主题、部署静态网站
tags: [Hexo, Fluid, Github]
index_img: /img/hexo.jpeg
date: 2022-09-17 19:16:49
---
## 什么是 Hexo？
Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](https://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

## 安装
### 安装前提
安装 Hexo 相当简单，只需要先安装下列应用程序即可：
* Node.js (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
* Git

### 安装Hexo

所有必备的应用程序安装完成后，即可使用 npm 安装 Hexo。
```bash
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```

## 更换主题
Hexo 的默认主题不好看，可以在 Hexo 的主题商城中挑选喜欢的主题替换，以 [Fluid](https://github.com/fluid-dev/hexo-theme-fluid) 主题为例：

1. 下载 zip 文件，解压后可以重新给文件命名，取个简单的名字：fluid;
![](/img/hexo/hexo1.png)
2. 将 fluid 文件放在 /themes 目录下；
![](/img/hexo/hexo2.png)
3. 修改 /_config.yml 文件的配置；
![](/img/hexo/hexo3.png)
4. 运行 `hexo server` 命令查看效果；

## 部署静态网站

### 部署到 GitHub pages

* 新建代码库

![](/img/hexo/hexo4.png)
另外再创建一个分支dev，后续的代码都在dev分支上修改，master分支用于部署 GitHub pages 的静态页面。

* 配置 GitHub 账户信息

打开Git Bash 输入以下命令
```bash
git config --global user.name "你的用户名"  
git config --global user.email  "你的邮箱"
```
* 配置 SSH 密钥

```bash
ssh-keygen -t rsa -C "你的邮箱"
```
一直回车就行，-C的是大写的C，在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容（其实没有必要设置密码）。

**注意：输入密码的时候没有输入痕迹的，不要以为什么也没有输入。**

* 在 GitHub 账户中添加你的公钥

* 测试

输入下面的命令（<font color="red">千万不要改动下面的命令，按照此模式直接输入就好了</font>）
```bash
ssh -T git@github.com
```
直接在后面输入yes即可，最后会出现如下情况即说明设置正确
![](/img/hexo/hexo5.png)

* 将本地的 Hexo 文件更新到 Github 的库中

克隆时选择 SSH 方式。克隆后切换到 dev 分支，将本地代码拷贝过去。

* 配置Deployment

同样在_config.yml文件中，找到Deployment，然后按照如下修改：（这里的分支写master）

```yaml
_config.yml

deploy:
  type: git
  repo: git@github.com:yourname/yourname.github.io.git
  branch: master
```
* 安装deploy-git

这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。
```bash
npm install hexo-deployer-git --save
```
然后部署，输入命令：
```bash
hexo deploy
```

* 写博客，发布文章

新建一篇博客，执行下面的命令：
```bash
hexo new post "article title"
```
此时在source\ _posts 目录下将会看到 article title.md 文件。

用MarkDown编辑器打开就可以编辑文章了。文章编辑好之后，运行生成、部署命令：
```bash
hexo g   // 生成
hexo d   // 部署
```
当然你也可以执行下面的命令，相当于上面两条命令的效果:
```bash
hexo d -g #在部署前先生成
```
如果没更新，可以用 hexo clean 来先清除之前的再生成。

* 访问博客

博客地址：https ://你的用户名.github.io

> 详细的文档可参考：[使用GitHub Pages+Hexo 搭建个人网站详细教程](https://blog.csdn.net/guoxiaorui666/article/details/99623023?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166343517216800182767025%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=166343517216800182767025&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-99623023-null-null.nonecase&utm_term=%E4%BD%BF%E7%94%A8GitHub%20Pages%2BHexo%20%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B&spm=1018.2226.3001.4450)
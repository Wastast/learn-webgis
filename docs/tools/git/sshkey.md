---
lastUpdated: false
contributors: false
---

# 配置 SSH key

## 配置全局 git 用户名和邮箱

在配置 ssh Key 之前首先需要配置 全局的 git 用户名和邮箱。

- git config --global user.name [name]：该命令可以查看或设置全局的 git 用户名

<img src="/image/tools/git/sshkey/gitusername.png" />

- git config --global user.email [email]：改名可以可以查看或设置全局的 git 邮箱

<img src="/image/tools/git/sshkey/gitemail.png" />

## 生成 ssh key

### 检查 ssh keys 是否存在

输入下面命令，如果存在 `id_rsa.pub` 或 `id_dsa.pub` 这两个文件，则直接进入步骤三即可，否则进入步骤二生成 SSH Key

```shell
ls -al ~/.ssh
```

不具备

<img src="/image/tools/git/sshkey/havessh.png" />

具备

<img src="/image/tools/git/sshkey/nothave.png" />

### 生成新的 ssh key

在命令行上输入

```shell
ssh-keygen -t rsa -C "你的邮箱"
```

输入指令后会弹出三个问题，都按回车 `Enter` 即可

```shell
Enter file in which to save the key (/c/Users/GuiXiang/.ssh/id_rsa):

Enter passphrase (empty for no passphrase):

Enter same passphrase again:
```

成功后如下图所示

<img src="/image/tools/git/sshkey/sucess.png" />

### 获取 ssh key

输入以下命令可以获取 `id_rsa.pub` 文件中的内容

```shell
cat ~/.ssh/id_rsa.pub
```

<img src="/image/tools/git/sshkey/getsshkey.png" />

## 在 Gitee(码云) 和 Github 上的应用

### Gitee

<img src="/image/tools/git/sshkey/gitee.gif" />

### Github

<img src="/image/tools/git/sshkey/github.gif" />

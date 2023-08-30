一、github
开源代码托管平台

远程仓库的两种访问方式：
HTTPS：零配置、重复输入账号密码
SSH：需要额外配置、输入一次就行

推荐SSH

#基于HTTPS将本地仓库上传github

#SSH传输前准备

1、生成SSH key
ssh-keygen -t rsa -b 4096 -C "注册githubs时的邮箱"
三次回车

2、配置SSH key

3、验证是否成功配置
ssh -T git@github.com
再输入yes

#基于SSH将本地仓库上传github
步骤与Https一样，只不过不需要密码了

#克隆到本地
git clone 复制的SSH地址

二、分支操作
分支：字面意思
多人协作时为了防止相互干扰，建议每个人基于分支进行项目功能开发。

#master主分支
在初始化仓库的时候，git默认创建了一个master分支，这就是主分支。
用来保存和记录整个项目已完成的功能代码。
ps:一般是不允许在master分支上修改代码的

#功能分支
专门用来开发新功能的分支，临时从master分支上分叉出来的，最终需要合并到master主分支上。

#查看分支列表
git branch

#创建新分支
git branch 分支名称

#切换分支
git checkout login

#快速创建和切换分支
1、切换到master分支
git checkout master
2、创建、切换
git checkout -b 分支名称

#合并分支
1、切换到master分支
git checkout master
2、合并
git merge 分支名称
ps:如果是C分支合并到A分支，需要切换到A再合并。

#删除分支（在合并之后分支就没用了，可以删除了）
git branch -d 分支名称 

#遇到冲突时的分支合并

#第一次将本地分支推送到远程分支
git push -u 远程仓库的别名 本地分支名称：远程分名称

ps:不是第一次就不用 -u
例如：
git push -u origin payment:pay
不改名字就省略：符号
git push -u origin payment

ps：默认形况下远程仓库就叫origin

#查看远程分支列表
git remote show 远程仓库名称

#跟踪分支：从远程分支下载到本地仓库中
git checkout 远程分支的名称

从远程分支下载到本地仓库中,并重命名分支
git checkout -b 本地分支名称 远程仓库名称/远程分支名称

#拉去远程分支的最新代码,处于哪个分支就更新的哪个
git pull

#删除远程分支
git push 远程仓库名称 --delete 远程分支名称
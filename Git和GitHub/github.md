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
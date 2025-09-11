# Sort the Court - GitHub Pages 部署指南

## 🚀 GitHub Pages 部署步骤

### 第一步：准备Git仓库

1. **初始化Git仓库**
```bash
git init
git add .
git commit -m "Initial commit: Sort the Court website"
```

2. **创建GitHub仓库**
- 登录 GitHub.com
- 点击 "New repository"
- 仓库名建议：`sortthecourt.top` 或 `sort-the-court`
- 设置为 Public（GitHub Pages免费版需要公开仓库）
- 不要初始化README（因为本地已有文件）

3. **连接远程仓库**
```bash
git remote add origin https://github.com/你的用户名/sortthecourt.top.git
git branch -M main
git push -u origin main
```

### 第二步：启用GitHub Pages

1. **进入仓库设置**
   - 在GitHub仓库页面，点击 "Settings"
   - 滚动到 "Pages" 部分

2. **配置Pages设置**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - 点击 "Save"

3. **等待部署完成**
   - GitHub会自动构建和部署
   - 通常需要1-5分钟
   - 部署完成后会显示访问地址

### 第三步：自定义域名配置

#### 选项A：使用GitHub提供的域名
- 默认地址：`https://你的用户名.github.io/sortthecourt.top`
- 立即可用，自带SSL证书

#### 选项B：配置自定义域名 sortthecourt.top

1. **在GitHub Pages设置中**
   - Custom domain: 输入 `sortthecourt.top`
   - 勾选 "Enforce HTTPS"

2. **配置DNS解析**
   在您的域名注册商处添加以下记录：

   **A记录（推荐）**：
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   ```

   **或者CNAME记录**：
   ```
   类型: CNAME
   名称: www
   值: 你的用户名.github.io
   ```

3. **验证域名**
   - GitHub会自动验证域名所有权
   - 验证通过后会自动配置SSL证书

### 第四步：优化部署配置

1. **创建GitHub Actions工作流**（可选）
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: '.'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```

2. **添加CNAME文件**（如果使用自定义域名）
```bash
echo "sortthecourt.top" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## 🔧 部署后检查清单

### ✅ 功能测试
- [ ] 网站正常加载
- [ ] 游戏链接工作正常
- [ ] 移动端响应式设计
- [ ] 所有页面可访问（privacy.html, terms.html, 404.html）

### ✅ SEO检查
- [ ] 结构化数据正常
- [ ] sitemap.xml 可访问
- [ ] robots.txt 正确配置
- [ ] Meta标签完整

### ✅ 性能优化
- [ ] 图片加载正常
- [ ] CSS/JS资源加载
- [ ] 页面加载速度
- [ ] SSL证书有效

## 🌐 DNS配置详细说明

### 如果您使用的是常见域名注册商：

#### 阿里云域名
1. 登录阿里云控制台
2. 进入域名管理
3. 点击"解析设置"
4. 添加A记录，指向GitHub Pages IP

#### 腾讯云域名
1. 登录腾讯云控制台
2. 进入DNS解析
3. 添加记录，类型选择A
4. 主机记录填写@，记录值填写GitHub IP

#### Cloudflare（推荐）
1. 将域名DNS服务器改为Cloudflare
2. 添加A记录指向GitHub Pages
3. 启用CDN加速和SSL
4. 获得更好的全球访问速度

## 🚨 常见问题解决

### 问题1：404错误
**原因**：文件路径不正确或仓库设置问题
**解决**：
- 确保index.html在根目录
- 检查GitHub Pages设置中的分支和文件夹
- 等待几分钟让部署生效

### 问题2：CSS/JS不加载
**原因**：相对路径问题
**解决**：
- 检查资源文件路径
- 确保所有链接使用相对路径
- 验证文件确实存在于仓库中

### 问题3：自定义域名不工作
**原因**：DNS配置未生效或配置错误
**解决**：
- 使用DNS检查工具验证解析
- 等待DNS传播（最多48小时）
- 检查域名注册商的DNS设置

### 问题4：SSL证书错误
**原因**：GitHub正在为自定义域名生成证书
**解决**：
- 等待几分钟到几小时
- 确保域名DNS解析正确
- 在GitHub Pages设置中重新保存域名

## 📊 部署后的优势

### 🎯 GitHub Pages优势
- ✅ **免费托管**：完全免费的静态网站托管
- ✅ **自动SSL**：免费的HTTPS证书
- ✅ **CDN加速**：全球内容分发网络
- ✅ **自动部署**：推送代码自动更新网站
- ✅ **版本控制**：完整的Git版本历史
- ✅ **高可用性**：99.9%的服务可用性

### 🚀 性能表现
- **加载速度**：全球CDN加速
- **安全性**：HTTPS加密传输
- **稳定性**：GitHub基础设施支持
- **SEO友好**：搜索引擎完全支持

## 📝 部署命令总结

```bash
# 1. 初始化并提交代码
git init
git add .
git commit -m "Initial commit: Sort the Court website"

# 2. 连接GitHub仓库
git remote add origin https://github.com/你的用户名/sortthecourt.top.git
git branch -M main
git push -u origin main

# 3. 后续更新
git add .
git commit -m "Update website"
git push
```

## 🎉 完成后访问

部署完成后，您的网站将在以下地址可用：
- **GitHub域名**：https://你的用户名.github.io/sortthecourt.top
- **自定义域名**：https://sortthecourt.top（配置DNS后）

---

**预计部署时间**：5-15分钟
**SSL证书生效**：立即（GitHub域名）或1-24小时（自定义域名）
**全球访问**：部署后立即可用
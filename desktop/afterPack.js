/* afterPack 钩子：用本地 rcedit 为 exe 写入图标与版本信息
 * （替代 electron-builder 内置 rcedit，规避其 winCodeSign 缓存解压的符号链接问题） */
const { execFile } = require('child_process');
const path = require('path');

exports.default = async function afterPack(context) {
  const exeName = 'SENS FORGE 灵敏度工坊.exe';
  const exe = path.join(context.appOutDir, exeName);
  const rcedit = path.join(__dirname, 'build-tools', 'rcedit-x64.exe');
  const icon = path.join(__dirname, 'icon.ico');

  const args = [
    exe,
    '--set-icon', icon,
    '--set-version-string', 'FileDescription', 'SENS FORGE 灵敏度工坊',
    '--set-version-string', 'ProductName', 'SENS FORGE 灵敏度工坊',
    '--set-version-string', 'CompanyName', 'SENS//FORGE',
    '--set-version-string', 'LegalCopyright', 'Copyright (c) 2026 SENS//FORGE',
    '--set-file-version', '1.0.0',
    '--set-product-version', '1.0.0.0',
    '--set-version-string', 'InternalName', 'SENS FORGE 灵敏度工坊'
  ];

  return new Promise((resolve, reject) => {
    execFile(rcedit, args, (err, stdout, stderr) => {
      if (err) {
        console.error('afterPack rcedit 失败:', err.message, stderr || '');
        return reject(err);
      }
      console.log('afterPack: 已写入图标与版本信息 →', exe);
      resolve();
    });
  });
};

import { PackageManager } from './package-manager';
import { ComponentMap } from '../component/component-map';

export class DependencyInstaller {
  constructor(
    /**
     * package manager instance.
     */
    private packageManager: PackageManager
  ) {}

  async install(rootDir: string, componentDirectoryMap: ComponentMap<string>) {
    const res = await this.packageManager.install(rootDir, componentDirectoryMap);
    return res;
  }
}
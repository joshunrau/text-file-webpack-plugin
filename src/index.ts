import { Compiler, Compilation, sources } from 'webpack';

interface TextFileWebpackPluginOptions {
  filename: string,
  text: string
}

class TextFileWebpackPlugin {
  options: TextFileWebpackPluginOptions;

  constructor(options: TextFileWebpackPluginOptions) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.thisCompilation.tap(TextFileWebpackPlugin.name, (compilation: Compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: TextFileWebpackPlugin.name,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
        },
        () => {
          compilation.emitAsset(
            this.options.filename,
            new sources.RawSource(this.options.text)
          );
        }
      );
    });
  }
}

export = TextFileWebpackPlugin;
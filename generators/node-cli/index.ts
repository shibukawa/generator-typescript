import { join } from "path";
import Generator from "yeoman-generator";

export default class extends Generator {
    public writing() {
        this.sourceRoot(join(__dirname, "templates"));
        const dotFiles = ["editorconfig", "gitignore", "vscode", "travis.yml"];
        for (const dotFile of dotFiles) {
            this.fs.copy(
                `${this.sourceRoot()}/${dotFile}`,
                this.destinationPath(`.${dotFile}`)
            );
        }

        const templates = [
            "package.json",
            "README.md",
            "CHANGELOG.md",
            "src/index.ts"
        ];
        for (const template of templates) {
            this.fs.copyTpl(
                `${this.sourceRoot()}/${template}.ejs`,
                this.destinationPath(template),
                this.options
            );
        }

        const regularFiles = ["jest.config.js", "tsconfig.json", "tslint.json"];
        for (const regularFile of regularFiles) {
            this.fs.copy(
                `${this.sourceRoot()}/${regularFile}`,
                this.destinationPath(regularFile)
            );
        }
    }

    public install() {
        this.installDependencies({
            npm: true,
            bower: false,
            yarn: false
        });
    }
}

import { join } from "path";
import Generator from "yeoman-generator";

export default class extends Generator {
    public writing() {
        this.sourceRoot(join(__dirname, "templates"));
        const dotFiles = [
            "editorconfig",
            "gitignore",
            "vscode",
            "travis.yml",
            "npmignore"
        ];
        for (const dotFile of dotFiles) {
            this.fs.copy(
                `${this.sourceRoot()}/${dotFile}`,
                this.destinationPath(`.${dotFile}`)
            );
        }

        const templates = ["package.json", "README.md", "CHANGELOG.md"];
        for (const template of templates) {
            this.fs.copyTpl(
                `${this.sourceRoot()}/${template}.ejs`,
                this.destinationPath(template),
                this.options
            );
        }

        const copyFiles = [
            { src: "jest.config.js" },
            { src: "src" },
            { src: "tsconfig.json" },
            { src: "tslint.json" },
            { src: "editorconfig", dest: ".editorconfig" },
            { src: "gitignore", dest: ".gitignore" },
            { src: "vscode", dest: ".vscode" },
            { src: "travis.yml", dest: ".travis.yml" },
            { src: "npmignore", dest: ".npmignore" }
        ];
        for (let { src, dest } of copyFiles) {
            if (!dest) {
                dest = src;
            }
            this.fs.copy(
                join(this.sourceRoot(), src),
                this.destinationPath(dest)
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

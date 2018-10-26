import { join } from "path";
import Generator from "yeoman-generator";

export default class extends Generator {
    public writing() {
        this.sourceRoot(join(__dirname, "templates"));
        const options = this.options as { [name: string]: any };
        const slugname = options.slugname as string;
        const copyFiles = [
            { src: "babelrc", dest: ".babelrc" },
            { src: "editorconfig", dest: ".editorconfig" },
            { src: "gitignore", dest: ".gitignore" },
            { src: "vscode", dest: ".vscode" },
            { src: "travis.yml", dest: ".travis.yml" },
            {
                src: "jest.config.js"
            },
            {
                src: "next.config.js"
            },
            {
                src: "pages"
            },
            {
                src: "src"
            },
            {
                src: "tsconfig.common.json"
            },
            {
                src: "tsconfig.json"
            },
            {
                src: "tslint.json"
            },
            {
                src: join("projects", "__name__", "npmignore"),
                dest: join("projects", slugname, ".npmignore")
            }
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

        const templateFiles = [
            {
                src: join("projects", "__name__", "package.json"),
                dest: join("projects", slugname, "package.json")
            },
            {
                src: join("projects", "__name__", "tsconfig.json"),
                dest: join("projects", slugname, "tsconfig.json")
            },
            {
                src: join("projects", "__name__", "src", "index.tsx"),
                dest: join("projects", slugname, "src", "index.tsx")
            },
            {
                src: join("projects", "__name__", "README.md"),
                dest: join("projects", slugname, "README.md")
            },
            {
                src: join("samples", "show.tsx")
            },
            {
                src: "CHANGELOG.md"
            },
            {
                src: "package.json"
            },
            {
                src: "README.md"
            }
        ];
        for (let { src, dest } of templateFiles) {
            if (!dest) {
                dest = src;
            }
            this.fs.copyTpl(
                join(this.sourceRoot(), `${src}.ejs`),
                this.destinationPath(dest),
                this.options
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

import { readFileSync } from "fs";
import { basename, join } from "path";

import chalk from "chalk";
import { getLoginUserProfile } from "login-user-profile";
import * as _ from "underscore.string";
import Generator from "yeoman-generator";
import yosay from "yosay";

interface IPackage {
    version: string;
    name: string;
}

function readPackage(): IPackage {
    const packageJson = JSON.parse(
        readFileSync(join(__dirname, "..", "..", "package.json"), {
            encoding: "utf8"
        })
    );
    return packageJson;
}

export default class extends Generator {
    /**
     * Gather basic project information.
     */
    public async gatherProjectInfo() {
        const { version, name } = readPackage();
        const generatorTitle = `${name} v${version}`;
        this.log(
            yosay(
                `Typescript Project Generators.\n${chalk.red(generatorTitle)} `
            )
        );

        const templateTypePrompt = {
            type: "list",
            name: "templateType",
            message: "What type of project do you want to create?",
            choices: [
                "node-lib",
                "node-cli",
                "mjs-lib",
                "universal-lib",
                "nextjs",
                "react-component"
            ],
            default: "node-lib"
        };

        const moduleNamePrompt = {
            name: "name",
            message: "Module Name",
            default: basename(process.cwd())
        };

        const descriptionPrompt = {
            name: "description",
            message: "Description",
            default: "The best web application ever."
        };

        const homepagePrompt = {
            name: "homepage",
            message: "Homepage",
            default: ""
        };

        const licensePrompt = {
            name: "license",
            message: "License",
            default: "MIT"
        };

        const githubUsernamePrompt = {
            name: "githubUsername",
            message: "GitHub username",
            default: ""
        };

        const authorNamePrompt = {
            name: "authorName",
            message: "Author's Name",
            default: ""
        };

        const authorEmailPrompt = {
            name: "authorEmail",
            message: "Author's Email",
            default: ""
        };

        const authorUrlPrompt = {
            name: "authorUrl",
            message: "Author's Homepage",
            default: ""
        };

        const prompts = [
            templateTypePrompt,
            moduleNamePrompt,
            descriptionPrompt,
            homepagePrompt,
            licensePrompt,
            githubUsernamePrompt,
            authorNamePrompt,
            authorEmailPrompt,
            authorUrlPrompt
        ];

        const profile = await getLoginUserProfile();
        if (profile) {
            if (profile.name) {
                authorNamePrompt.default = profile.name;
            }
            if (profile.email) {
                authorEmailPrompt.default = profile.email;
            }
            if (profile.url) {
                authorUrlPrompt.default = profile.url;
            }
            if (profile.githubUserId) {
                githubUsernamePrompt.default = profile.githubUserId;
            }
        }

        const props = await this.prompt(prompts);
        props.slugname = _.slugify(props.name);
        props.camelname = _.camelize(props.name);
        props.titlename = _.titleize(props.name).replace(/-/g, "");

        props.repoUrl =
            "https://github.com/" + props.githubUsername + "/" + props.slugname;

        if (!props.homepage) {
            props.homepage = props.repoUrl;
        }
        const generatorName = "@shibukawa/typescript";
        this.composeWith(`${generatorName}:${props.templateType}`, props);
    }
}

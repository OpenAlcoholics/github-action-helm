export enum HelmSubcommand {
    All = "all",
    Install = "install",
    Uninstall = "uninstall",
    Upgrade = "upgrade",
    Rollback = "rollback",
    None = "",
}

export enum GithubActionInputType {
    Number = "number",
    String = "string",
    Time = "time",
    File = "file",
    Boolean = "boolean",
}

export type GithubActionInputEntryData = {
    description: string
    required: boolean
    default: string
    value: string | boolean | number | undefined
    supported_subcommands: HelmSubcommand[],
    type: GithubActionInputType,
    priority?: number
};

export type GithubActionInputEntry = {
    name: string
    value: GithubActionInputEntryData
};

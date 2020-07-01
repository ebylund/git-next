git-next
========

Propose the next git tag version of the git repo in the current directory

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/git-next.svg)](https://npmjs.org/package/git-next)
[![Downloads/week](https://img.shields.io/npm/dw/git-next.svg)](https://npmjs.org/package/git-next)
[![License](https://img.shields.io/npm/l/git-next.svg)](https://github.com/ebylund/git-next/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g git-next
$ git-next COMMAND
running command...
$ git-next (-v|--version|version)
git-next/0.1.0 darwin-x64 node-v12.16.1
$ git-next --help [COMMAND]
USAGE
  $ git-next COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`git-next hello [FILE]`](#git-next-hello-file)
* [`git-next help [COMMAND]`](#git-next-help-command)

## `git-next hello [FILE]`

describe the command here

```
USAGE
  $ git-next hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ git-next hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ebylund/git-next/blob/v0.1.0/src/commands/hello.ts)_

## `git-next help [COMMAND]`

display help for git-next

```
USAGE
  $ git-next help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->

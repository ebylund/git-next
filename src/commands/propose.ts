import {Command, flags} from '@oclif/command'

import { exec } from 'child_process'
import { gt, lt, inc } from 'semver'

export const parseLines = (raw: string) => raw.trim().split('\n').map(it => it.trim())

export const fetchTags = async (): Promise<string[]> => {
  return new Promise( (resolve, reject) => {
      exec('git tag | sort -r', (err, raw) => {
          if (err) reject(err)
          resolve(parseLines(String(raw) ?? ['0.0.1-alpha.1']))
        })
    })
}

const sortBySemVer = (a: string, b: string): number => {
  if (lt(a, b)) return 1
  if (gt(a, b)) return -1
  return 0
}

export const nextProposedTag = async () => {
  const tags = await gitLatestTag()
  console.log("latest tag: ", tags[0])
  return inc(tags[0], 'patch')
}

export const gitLatestTag = async (mockTags?: string[]): Promise<string[]> => {
  let tags = mockTags

  if (!tags) tags = await fetchTags()

  return tags.sort(sortBySemVer)
}

export default class Propose extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ git-next propose
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name to print'}),
    force: flags.boolean({char: 'f'}),
    release: flags.enum({
      options: ['MAJOR', 'PRE_MAJOR', 'MINOR', 'PRE_MINOR', 'PATCH', 'PRE_PATCH'],
      char: 'r',
      default: 'PATCH',
    })
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Propose)
    const name = flags.name ?? 'world'

    const nextTag = await nextProposedTag()
    this.log(`next proposed tag: ${nextTag?.toString()}`)
  }
}

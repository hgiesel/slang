import execute from './executor'
import parseCode from './parser'
import { toString } from './executor/coerce'

globalThis.execute = execute
globalThis.parseCode = parseCode
globalThis.slangToString = toString

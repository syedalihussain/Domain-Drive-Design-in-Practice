import { ExceptionBase } from './exception.base';
import { ExceptionCodes } from './exception.codes';

export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ExceptionCodes.argumentOutOfRange;
}
